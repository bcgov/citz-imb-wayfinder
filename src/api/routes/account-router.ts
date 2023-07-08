/**
 * @summary Analytic Endpoint for Project Wayfinder, collects usage information
 *          from opt-in users.
 * @author LocalNewsTV
 */
import express from 'express';
import passport from 'passport';
import {
  createAccount,
  ownerOverride,
  removeAccount,
  updatePassword,
} from '../controllers/account-controller';

const router = express.Router();

router.route('/account')
  .delete(passport.authenticate('local', { session: false }), removeAccount)
  .patch(passport.authenticate('local', { session: false }), updatePassword)
  .post(passport.authenticate('local', { session: false }), createAccount)
  .put(ownerOverride);

export default router;
