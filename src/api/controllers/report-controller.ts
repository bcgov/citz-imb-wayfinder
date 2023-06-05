/**
 * @summary Controller for Project Wayfinders report mechanism.
 *          designed to take user reports from the application and store in database
 * @author  LocalNewsTV
 */
import { Request, Response } from 'express';

/**
 * TODO: - Add real functionality
 *       - Create a mongoose model to receive data sent in
 * @desc endpoint to receive data from Wayfinder application
 * @param req Request object representing a users report
 * @param res Server response confirming object was sent
 */
export const userSendsReport = async (req: Request, res: Response) => {
  res.status(201).send(req.body);
};

export default userSendsReport;
