/**
 * @summary Analytic Endpoint for Project Wayfinder, collects usage information
 *          from opt-in users.
 * @author LocalNewsTV
 */
import express from 'express';
import passport from 'passport';
import { createAccount, updatePassword, removeAccount, ownerOverride } from '../controllers/account-controller';

const router = express.Router();

router.route('/account')
  .post(passport.authenticate('local', { session: false }), createAccount)
  .patch(passport.authenticate('local', { session: false }), updatePassword)
  .delete(passport.authenticate('local', { session: false }), removeAccount)
  .put(ownerOverride);
export default router;
