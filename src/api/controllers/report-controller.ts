/**
 * @summary Controller for Project Wayfinders report mechanism.
 *          designed to take user reports from the application and store in database
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import validationErrorHandler from '../utils/validationErrorHandler';

const reportModel = mongoose.model('report');

/**
 * @desc endpoint to receive user reports from Wayfinder application
 *       endpoint uses Mongoose models to validate
 * @param req Request object representing a users report
 * @param res Server response confirming object was sent
 */
export const userSendsReport = async (req: Request, res: Response) => {
  await reportModel.create(req.body)
    .then((newEntry) => {
      if (newEntry.eventType === 'APITest') {
        // eslint-disable-next-line no-underscore-dangle
        reportModel.deleteOne({ id: newEntry._id });
      }
      return res.status(201).send(newEntry);
    })
    .catch((error) => res.status(400).json(validationErrorHandler(error)));
};

export default userSendsReport;
