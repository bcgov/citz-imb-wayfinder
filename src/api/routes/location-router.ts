import express from 'express';
import { getAllLocations, locationByCriteria, updateLocations } from '../controllers/location-controller';

/**
 * @summary The Locations Endpoint is intended to send a list of all BC Service Locations.
 *          The intention is that the data is used to seed the PWA to assist in offline
 *          functionality
 * @author  LocalNewsTV
 */
const router = express.Router();

router.route('/locations')
  .get(getAllLocations)
  .patch(updateLocations)
  .post(locationByCriteria);

export default router;
