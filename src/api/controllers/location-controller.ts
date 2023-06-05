/**
 * @summary Location Endpoint will send all locations
 *          (Offline functionality requires having locations cached)
 * @author  LocalNewsTV
 */
import mongoose from 'mongoose';
import { Request, Response } from 'express';

const locationsModel = mongoose.model('location');

/**
 * @desc returns a collection of all Locations in BC from database
 * @returns {Array} Array of Sites by Location
 */
const getAllLocations = async (req: Request, res: Response): Promise<void> => {
  await locationsModel.find()
    .then((response) => res.status(200).send({ locations: response }))
    .catch((err) => res.status(500).send(`An Error has Occured, ${err}`));
};

export default getAllLocations;
