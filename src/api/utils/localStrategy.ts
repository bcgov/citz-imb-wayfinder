/**
 * @desc   LocalStrategy for creation and maintenance of user accounts
 * @author LocalNewsTV
 */
import mongoose from 'mongoose';
import { Strategy as LocalStrategy } from 'passport-local';

const userModel = mongoose.model('user');

const localStrategy = new LocalStrategy(
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
);

export default localStrategy;
