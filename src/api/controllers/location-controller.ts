/**
 * PURPOSE: Location Endpoint will send all locations 
 * (Offline functionality requires having locations cached)
 */
import { Request, Response } from 'express';


export const getAllLocations = async (req: Request, res: Response) => {
  return res.status(200).send()
}
