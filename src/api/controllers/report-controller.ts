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
    .then(() => res.status(201).send(httpResponses[201]))
    .catch((error) => res.status(400).json(validationErrorHandler(error)));
  if (req.body.eventType === 'APITest') {
    await reportModel.deleteMany({ eventType: 'APITest' });
  }
};

export default userSendsReport;
