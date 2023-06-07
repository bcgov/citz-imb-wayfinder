/**
 * @summary Location Endpoint will send all locations and unique services
 *          (Offline functionality requires having locations cached)
 * @author  LocalNewsTV
 */
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import SingleLocation from '../types/SingleLocation';

const locationsModel = mongoose.model('location');

type ResponseObject = {
  locations: Array<SingleLocation>;
  services: Array<string>;
}
/**
 * @desc Takes all SingleLocations from database then creates a unique
 *       list of alphabetically organized services. Data is used by Wayfinder
 *       application to seed the cache.
 * @summary sends seed data for frontend
 * @example {
 *  "locations": [{...}],
 *  "services" : [""]
 * }
 * @returns {ResponseObject} Array of Sites by Location
 */
const getAllLocations = async (req: Request, res: Response): Promise<Response> => {
  const serviceArr: Array<string> = [];
  const responseObject: ResponseObject = {} as ResponseObject;
  const data: Array<SingleLocation> = await locationsModel.find();

  data.forEach((location) => {
    serviceArr.push(...location.services);
  });

  responseObject.locations = data;
  // Create a unique list of services
  responseObject.services = [...new Set(serviceArr.sort())];

  return res.status(200).json(responseObject);
};

export default getAllLocations;
