/**
 * @desc   BasicStrategy for Passport authentication in application
 *         This strategy is used for giving PowerBI Access to data via reports
 * @author LocalNewsTV
 */
import { BasicStrategy } from 'passport-http';
import mongoose from 'mongoose';

const userModel = mongoose.model('user');

const basicStrategy = new BasicStrategy(
  (login, password, done) => {
    userModel.findOne({
      $or: [
        { email: login },
        { username: login },
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

export default basicStrategy;
