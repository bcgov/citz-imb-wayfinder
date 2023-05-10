import express from 'express';
import { getHealth } from '../controllers/health-controller';

const router = express.Router();

router.route('/health')
    .get(getHealth);

export default router;
