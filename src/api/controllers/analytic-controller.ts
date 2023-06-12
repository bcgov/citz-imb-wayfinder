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

export default takeAnalytic;
