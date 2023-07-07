/**
 * @summary Controller for Project Wayfinders report mechanism.
 *          designed to take user reports from the application and store in database
 * @author  LocalNewsTV
 */
import { Response, Request } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import basicStrategy from '../utils/basicStrategy';
import httpResponses from '../utils/httpResponse';
import validationErrorHandler from '../utils/validationErrorHandler';

const reportModel = mongoose.model('report');

passport.use(basicStrategy);

/**
 * @desc endpoint to receive user reports from Wayfinder application
 *       uses Mongoose models to validate
 */
export const userSendsReport = async (req: Request, res: Response) => {
  await reportModel.create(req.body)
    .then(async (newEntry) => {
      if (newEntry.eventType === 'APITest') {
        // eslint-disable-next-line no-underscore-dangle
        await reportModel.deleteOne({ _id: newEntry._id });
      }
      return res.status(201).send(newEntry);
    })
    .catch((error) => res.status(400).json(validationErrorHandler(error)));
};

/**
 * @desc    get method for endpoint, sends all user submitted reports
 *          uses password for auth to get the data
 * @returns Array of all Reports
 */
export const getUserReports = async (req: Request, res: Response) => {
  try {
    const reports = await reportModel.find({});
    res.status(200).json(reports);
  } catch (ex) {
    res.status(500).send(httpResponses[500]);
  }
};
