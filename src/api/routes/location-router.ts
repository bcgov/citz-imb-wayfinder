import express from 'express';
import getAllLocations from '../controllers/location-controller';

const router = express.Router();

router.route('/locations')
  .get(getAllLocations);

export default router;
