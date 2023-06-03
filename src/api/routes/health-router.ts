import express from 'express';
import { getHealth } from '../controllers/health-controller';

const router = express.Router();
/**
 * This is the Health Endpoint for Project Wayfinder, its purpose is to provide health checks to
 * dockerization efforts to ensure the container is operating as expected
 */
router.route('/health')
  .get(getHealth);

export default router;
