import express from 'express';
import getAllLocations from '../controllers/location-controller';

/**
 * PURPOSE:   The Locations Endpoint is intended to send a list of all BC Service Locations.
 *            The intention is that the data is used to seed the PWA to assist in offline
 *            functionality
 * TODO:      Add a unique list of BC Services to further seed more data to PWA
 */
const router = express.Router();

router.route('/locations')
  .get(getAllLocations);

export default router;
