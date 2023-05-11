/**
 * PURPOSE: Location Endpoint will send all locations 
 * (Offline functionality requires having locations cached)
 */
import { Request, Response } from 'express';
import { SingleLocation } from '../models';

/**
 * Sample Object based on Data available in ina CSV of Service Canada Locations
 *      -Subject to change in future development 
 */
const sampleData: SingleLocation = {
    External_Site: 'Service BC - City',
    Address: '740 Street st',
    Locality: 'Vernon',
    Site_Phone_No: '123 456-7890',
    Site_Fax_no: '123 456-7890',
    Website_URL: 'http://google.ca',
    Site_Email: '',
    Latitude: 50.265568,
    Longitude: -119.270538,
    Office_Code: '00093',
}

/**
 * TODO: Integrate Mongoose and MongoDB to handle live data
 * @desc Takes a collection of Locations in BC from database
 * @returns {[SingleLocation]} Array of Sites by Location 
 */
export const getAllLocations = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ 
    'locations': [sampleData]
  });
}
