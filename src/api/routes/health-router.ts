/**
 * @summary This is the Health Endpoint for Project Wayfinder, its purpose is to provide health
 *          checks to dockerization efforts to ensure the container is operating as expected
 * @author LocalNewsTV
 */
import express from 'express';
import { getHealth } from '../controllers/health-controller';

const router = express.Router();

router.route('/health')
  .get(getHealth);

export default router;
