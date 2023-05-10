/**
 * PURPOSE: Health Endpoint Controller for Project Wayfinder
 */
import { Request, Response } from 'express';

export const getHealth = async (req: Request, res: Response) => {
  return res.status(200).send('Project Waypoint API is healthy and ready')
}
