/**
 * @summary Health Endpoint Controller for Project Wayfinder
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';

export const getHealth = async (req: Request, res: Response) => (
  res.status(200).send('Project Wayfinder API is healthy and ready')
);

export default getHealth;
