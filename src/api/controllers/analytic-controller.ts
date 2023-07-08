/**
 * @summary Collection of anonymous usage data for Wayfinder Application
 *          Analytics are submitted from the Wayfinder application
 *          Obtaining analytic data requires basic authorization
 * @type {Analytic} The created and stored products of this controller
 * @author LocalNewsTV
 */
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import basicStrategy from '../utils/basicStrategy';
import validationErrorHandler from '../utils/validationErrorHandler';
import httpResponses from '../utils/httpResponse';

const analyticModel = mongoose.model('analytic');

passport.use(basicStrategy);
/**
 * @desc    Takes analytic information from Wayfinder application and adds to database
 *          Mongoose Schema validates entry and enforces types.
 * @returns {Response}
 */
export const takeAnalytic = async (req: Request, res: Response) => {
  await analyticModel.create(req.body)
    .then(() => res.status(201).send(httpResponses[201]))
    .catch((error) => res.status(400).json(validationErrorHandler(error)));
};

/**
 * @desc    GET method for endpoint, sends all analytic info stored
 *          Uses Basic Authentication strategy with Passport
 * @returns Array of all analytics
 */
export const getAnalytic = async (req: Request, res: Response) => {
  try {
    const reports = await analyticModel.find({});
    res.status(200).json(reports);
  } catch (ex) {
    res.status(500).send(httpResponses[500]);
  }
};
