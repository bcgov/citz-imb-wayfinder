/**
 * @summary This is the controller for the Wayfinder API's Reporting function
 *          this service is designed to take in reports from users, lint them
 *          and post them to a database
 *          Passport authentication protects get endpoint access can be controlled
 *          on a user level
 * @author LocalNewsTV
 */
import express from 'express';
import passport from 'passport';
import { getUserReports, userSendsReport } from '../controllers/report-controller';

const router = express.Router();

router.route('/report')
  .get(passport.authenticate('basic', { session: false }), getUserReports)
  .post(userSendsReport);

export default router;
