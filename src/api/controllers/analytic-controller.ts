/**
 * PURPOSE: Collection of anonymous analytic information for use by BC Gov
 */
import { Request, Response } from 'express';

export const takeAnalytic = async (req: Request, res: Response) => {
  res.status(201).json(req.body);
};

export default takeAnalytic;
