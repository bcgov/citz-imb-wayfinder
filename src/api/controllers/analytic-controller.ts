/**
 * @summary collection of anonymous analytic information for use by BC Gov
 * @author LocalNewsTV
 */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import validationErrorHandler from '../utils/validationErrorHandler';
import httpResponses from '../utils/httpResponse';

const analyticModel = mongoose.model('analytic');

/**
 * @desc Takes analytic information from Wayfinder application and adds to database
 *       Mongoose Schema validates entry and enforces types.
 * @returns {Response}
 */
export const takeAnalytic = async (req: Request, res: Response) => {
  await analyticModel.create(req.body)
    .then(() => res.status(201).send(httpResponses[201]))
    .catch((error) => res.status(400).json(validationErrorHandler(error)));
};

/**
 * @desc get method for endpoint, sends all analytic info
 *       uses password for auth to get the data
 * @returns Array of all analytics
 */
export const getAnalytic = async (req: Request, res: Response) => {
  if (req.headers.authorization
    && req.headers.authorization.startsWith('Bearer ')
    && req.headers.authorization.split(' ')[1] === process.env.ADMIN_KEY) {
    const analytics = await analyticModel.find({});
    return res.status(200).json(analytics);
  }
  return res.status(403).send(httpResponses[403]);
};
