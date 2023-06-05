import express from 'express';
import takeAnalytic from '../controllers/analytic-controller';

const router = express.Router();

router.route('/analytic')
  .post(takeAnalytic);

export default router;
