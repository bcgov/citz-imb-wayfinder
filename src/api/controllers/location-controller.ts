/**
 * @summary Location Endpoint will send all locations and unique services
 *          (Offline functionality requires having locations cached)
 * @author  LocalNewsTV
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import SingleLocation from '../types/SingleLocation';
import UpdateDate from '../types/UpdateDate';
import extractServiceList from '../utils/extractServiceList';
import httpResponses from '../utils/httpResponse';
import servicesOffered from '../utils/servicesOffered';

dotenv.config();
const locationsModel = mongoose.model('location');
const dateModel = mongoose.model('updateDate');

/** ********************************************************************
 *                Helper Utilities to the Endpoints
 ******************************************************************** */

/**
 * @desc Server response object when using the GET method
 */
type ResponseObject = {
  ServiceBCLocations: Array<SingleLocation>;
  ServiceBCServices: Array<string>;
  HealthBCLocations: Array<SingleLocation>;
  HealthBCServices: Array<string>;
  ICBCLocations: Array<SingleLocation>;
  ICBCServices: Array<string>;
  BCHousingLocations: Array<SingleLocation>;
  BCHousingServices: Array<string>;
  CourtsLocations: Array<SingleLocation>;
  CourtsServices: Array<string>;
  allServices: Array<string>;
  updateArr: Array<UpdateDate>;
}

/** ********************************************************************
 *               Endpoint Functionality (GET, POST, PATCH)
 ******************************************************************** */
/**
 * @desc     Takes all SingleLocations from database then creates a unique
 *           list of alphabetically organized services. Data is used by Wayfinder
 *           application to seed the cache.
 * @summary  GET method sends seed data for frontend
 * @example  {
 *              "serviceBCLocations": [{...}],
 *              "serviceBCServices" : [""],
 *              "healthBCLocations": [{}],
 *              "healthBCServices": [""],
 *              "CourtLocations": [{}],
 *              "CourtServices": [""],
 *              "BCHousingLocations": [{}],
 *              "BCHousingServices": [""],
 *              "allServices": [""],
 *              "updateArr": [UpdateDate]
 *           }
 * @returns  {ResponseObject} Array of Sites by Location
 */
export const getAllLocations = async (req: Request, res: Response): Promise<Response> => {
  const responseObject: ResponseObject = {} as ResponseObject;
  // Get Locations lists
  responseObject.ServiceBCLocations = await locationsModel.find({ serviceType: 'ServiceBC' });
  responseObject.HealthBCLocations = await locationsModel.find({ serviceType: 'HealthBC' });
  responseObject.ICBCLocations = await locationsModel.find({ serviceType: 'ICBC' });
  responseObject.CourtsLocations = await locationsModel.find({ serviceType: 'Courts' });
  responseObject.BCHousingLocations = await locationsModel.find({ serviceType: 'BCHousing' });

  // Get list for when last updated
  responseObject.updateArr = await dateModel.find({});

  // Gather unique Services List
  responseObject.HealthBCServices = extractServiceList(responseObject.HealthBCLocations);
  responseObject.ServiceBCServices = extractServiceList(responseObject.ServiceBCLocations);
  responseObject.ICBCServices = extractServiceList(responseObject.ICBCLocations);
  responseObject.BCHousingServices = extractServiceList(responseObject.BCHousingLocations);
  responseObject.CourtsServices = extractServiceList(responseObject.CourtsLocations);

  responseObject.allServices = [
    ...responseObject.HealthBCServices,
    ...responseObject.ServiceBCServices,
    ...responseObject.ICBCServices,
    ...responseObject.CourtsServices,
    ...responseObject.BCHousingServices,
  ].sort();
  // Ship results to client
  return res.status(200).json(responseObject);
};

export interface ReturnObject {
  [key: string]: any;
}

/**
 * @desc    takes a user submitted array of {UpdateDate} and compares to stored server values
 *          If a value does not match, the server prepares a new set of data to send to the phone
 * @returns {ReturnObject} Updated object with arrays of SingleLocation, and new UpdateDate Array
 */
export const updatedInfo = async (req: Request, res: Response) => {
  const responseObject: ReturnObject = {};
  if (req.body.updateArr && typeof req.body.updateArr === typeof []) {
    const datesArr: Array<UpdateDate> = await dateModel.find({});
    responseObject.datesArr = datesArr;
    const promises = req.body.updateArr.map(async (item: UpdateDate) => {
      if (servicesOffered.includes(item.serviceType)) {
        const serviceDate: any = datesArr.find((service: UpdateDate) => (
          item.serviceType === service.serviceType
        ));
        if (serviceDate
          && new Date(item.dateModified).getTime() !== serviceDate.dateModified.getTime()) {
          const updatedLocations: Array<SingleLocation> = await locationsModel.find(
            { serviceType: item.serviceType },
          );
          const updatedServices = extractServiceList(updatedLocations);
          responseObject[`${item.serviceType}Locations`] = updatedLocations;
          responseObject[`${item.serviceType}Services`] = updatedServices;
        }
      }
    });
    await Promise.all(promises);
    return res.status(200).json(responseObject);
  }
  return res.status(200).json(responseObject);
};

/**
 * @desc Updates the date objects in the database to users only pull in datasets
 *       containing new information. Scales to new service types.
 */
const updateDateObject = async (serviceType: string) => {
  await dateModel.findOneAndUpdate(
    { serviceType },
    { dateModified: Date.now() },
    { upsert: true },
  );
};

/**
 * @desc    Designed for the Web Scraper in mind, uses a secret for bearer authorization
 *          Updates and posts location data to the database and an end step to the scraping process
 *          Using the API eliminates additional db connections.
 *          Does not use an upsert as Mongoose doesn't directly enforce Schema validation in it
 * @type    { SingleLocation }
 * @summary PATCH call for Update/Insert operation on Database from Web Scraper
 */
export const updateLocations = async (req: Request, res: Response): Promise<Response> => {
  if (req.headers.authorization
    && req.headers.authorization.startsWith('Bearer ')
    && req.headers.authorization.split(' ')[1] === process.env.SCRAPER_API_KEY) {
    if (await locationsModel.findOne({ website: req.body.website, locale: req.body.locale })) {
      await locationsModel.updateOne({
        website: req.body.website,
        locale: req.body.locale,
      }, req.body);
      await updateDateObject(req.body.serviceType);
      return res.status(204).send(httpResponses[204]);
    }
    try {
      await locationsModel.create(req.body);
      await updateDateObject(req.body.serviceType);
      return res.status(201).send(httpResponses[201]);
    } catch (ex) {
      return res.status(400).send(httpResponses[400]);
    }
  }
  return res.status(403).send(httpResponses[403]);
};
