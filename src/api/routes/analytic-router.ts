/**
 * @summary Analytic Endpoint for Project Wayfinder, collects usage information
 *          from opt-in users.
 * @author LocalNewsTV
 */
import express from 'express';
import passport from 'passport';
import { getAnalytic, takeAnalytic } from '../controllers/analytic-controller';

const router = express.Router();

router.route('/analytic')
  .get(passport.authenticate('basic', { session: false }), getAnalytic)
  .post(takeAnalytic);

export default router;
