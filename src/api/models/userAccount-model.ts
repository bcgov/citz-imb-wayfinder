/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/**
 * @summary User model for Wayfinder Database
 * @desc    User accounts are for controlling access to database data
 *          Wayfinder does not use user accounts in application
 *          All passwords stored in database are hashed and salted
 * @author  LocalNewsTV
 */
import mongoose from 'mongoose';
import argon2 from 'argon2';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 30,
    match: /^[A-Za-z0-9]+$/,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  email: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 48,
    match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 64,
    format: 'password',
  },
});

UserSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; },
});

// eslint-disable-next-line func-names
UserSchema.pre('save', async function () {
  try {
    // Hash and salt password
    const hash = await argon2.hash(this.password, {
      type: argon2.argon2id,
    });
    this.password = hash;
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log('Error in Hashing process: ', ex);
  }
});

UserSchema.methods.verifyPassword = (
  // eslint-disable-next-line func-names
  async function (plainTextPassword: string) {
    const dbHashedPassword = this.password;
    try {
      return await argon2.verify(dbHashedPassword, plainTextPassword);
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.log('Error verifying password:', ex);
      return false;
    }
  });

export default mongoose.model('user', UserSchema);
