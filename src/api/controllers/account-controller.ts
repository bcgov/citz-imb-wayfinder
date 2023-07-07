/* eslint-disable no-console */
/**
 * @summary User account management for controlling access to analytic and report data
 *          The Wayfinder application does not use accounts.
 *          User Accounts are edited using Request bodies.
 *          User accounts are only intended for controlling access to data in database.
 *          User accounts will access endpoints using basic authorization (Works with PowerBI)
 *          All endpoints in this file are protected by passport LocalStrategy
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import argon2 from 'argon2';
import { Strategy as LocalStrategy } from 'passport-local';
import validationErrorHandler from '../utils/validationErrorHandler';
import httpResponses from '../utils/httpResponse';

const userModel = mongoose.model('user');

/**
 * @desc Passport strategy to allow users to gain access to these endpoints via Request bodies
 */
passport.use(new LocalStrategy(
  (userID: string, password: string, done: any) => {
    userModel.findOne({
      $or: [
        { email: userID },
        { username: userID },
      ],
    })
      .exec(async (error, user: any) => {
        if (error) return done(error);
        // no user found
        if (!user) return done(null, false);
        if (!await user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
  },
));

/**
 * @desc Converts plaintext passwords into a hashed password for database storage
 * @param plaintextPassword user provided password
 * @returns {Promise<string>} Hashed and salted password
 */
const salt = async (plaintextPassword: string): Promise<string> => {
  // Hash and salt password
  const hash = await argon2.hash(plaintextPassword, {
    type: argon2.argon2id,
  });
  return hash;
};

/**
 * @desc Scans database for any entries to make sure that email and password are not in use
 * @param newEmail New Account provided Email to verify
 * @param newUsername New Account provided username to verify
 * @returns {Promise<any>} Unique constraint check on Credentials
 */
const checkUserIsTaken = async (newEmail: string, newUsername: string): Promise<any> => (
  userModel.exists({
    $or: [
      { email: newEmail },
      { username: newUsername },
    ],
  })
);

/**
 * @desc    Allows an admin user to create new user accounts,
 *          admin accounts cannot create new admin accounts
 *          Passwords of accounts are stored hashed
 * @returns {Promise<Response>}
 */
export const createAccount = async (req: Request, res: Response) => {
  const user = await userModel.findOne({
    $or: [
      { email: req.body.username },
      { username: req.body.username },
    ],
  });
  if (user.admin) {
    try {
      if (await checkUserIsTaken(req.body.newEmail, req.body.newUser)) {
        return res.status(409).send('Account already exists');
      }
      const newUser = await userModel.create({
        username: req.body.newUser,
        password: req.body.newPass,
        email: req.body.newEmail,
        admin: false,
      });
      return res.status(201).json(newUser);
    } catch (ex) {
      return res.status(400).json(validationErrorHandler(ex))
    }
  }
  return res.status(403).send(httpResponses[403]);
};

/**
 * @desc    Functionality to store a user password, salts password before updating
 * @returns {Promise<Response>}
 */
export const updatePassword = async (req: Request, res: Response): Promise<Response> => {
  if (req.body.newPassword !== req.body.password) {
    await userModel.updateOne(
      { username: req.body.username },
      { $set: { password: await salt(req.body.newPassword) } },
    );
    return res.status(204).send('Password Updated');
  }
  return res.status(409).send("Passwords don't match");
};

/**
 * @desc    Function to delete user accounts:
 *            -No user can delete another users account
 *            -Any user can delete their own account
 *            -Any admin can delete any non-admin account
 *            -Any admin with ADMIN_KEY Bearer Authorization can delete any account
 * @returns {Promise<Response>}
 */
export const removeAccount = async (req: Request, res: Response): Promise<Response> => {
  // Verify if user is targetting self before going through more expensive operations
  if (req.body.username === req.body.target) {
    await userModel.deleteOne({ username: req.body.username });
    return res.status(204).send('Account Deleted');
  }
  // Gather user document to verify admin status
  const user = await userModel.findOne({
    $or: [
      { email: req.body.username },
      { username: req.body.username },
    ],
  });
  if (user.admin) {
    const target = await userModel.findOne({
      $or: [
        { email: req.body.target },
        { username: req.body.target },
      ],
    });
    if (target) {
      if (!target.admin
        || (req.headers.authorization
        && req.headers.authorization.startsWith('Bearer')
        && req.headers.authorization.split(' ')[1] === process.env.ADMIN_KEY)) {
        await userModel.deleteOne(target);
        return res.status(204).send('Deleted');
      }
      return res.status(403).send('Cannot delete an account with admin privilege');
    }
    return res.status(404).send('User not found');
  }
  return res.status(403).send(httpResponses[403]);
};

/**
 * @desc    Owner access to create new accounts. ADMIN_KEY can create admin accounts
 *          Verified as Authorization Bearer token
 * @returns {Promise<Response>}
 */
export const ownerOverride = async (req: Request, res: Response) => {
  if (req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
    && req.headers.authorization.split(' ')[1] === process.env.ADMIN_KEY) {
    userModel.create(req.body)
      .then(() => res.status(201).send(httpResponses[201]))
      .catch((err) => {
        console.error(err);
        return res.status(400).send(validationErrorHandler(err));
      });
  }
  res.status(403).send(httpResponses[403]);
};
