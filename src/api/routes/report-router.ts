/**
 * @summary This is the controller for the Wayfinder API's Reporting function
 *          this service is designed to take in reports from users, lint them
 *          and post them to a database
 * @author LocalNewsTV
 */
import express from 'express';
import { userSendsReport, getUserReports } from '../controllers/report-controller';

const router = express.Router();

router.route('/report')
  .post(userSendsReport)
  .get(getUserReports);

export default router;
