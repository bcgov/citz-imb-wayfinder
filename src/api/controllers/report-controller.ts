/**
 * @summary Controller for Project Wayfinders report mechanism.
 *          designed to take user reports from the application and store in database
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import validationErrorHandler from '../utils/validationErrorHandler';
import httpResponses from '../utils/httpResponse';

const reportModel = mongoose.model('report');

/**
 * @desc endpoint to receive user reports from Wayfinder application
 *       endpoint uses Mongoose models to validate
 * @param req Request object representing a users report
 * @param res Server response confirming object was sent
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
 * @desc get method for endpoint, sends all user submitted reports
 *       uses password for auth to get the data
 * @returns Array of all Reports
 */
export const getUserReports = async (req: Request, res: Response) => {
  if (req.headers.authorization
    && req.headers.authorization.startsWith('Bearer ')
    && req.headers.authorization.split(' ')[1] === process.env.ADMIN_KEY) {
    const reports = await reportModel.find({});
    return res.status(200).json(reports);
  }
  return res.status(403).send(httpResponses[403]);
};

export default userSendsReport;
