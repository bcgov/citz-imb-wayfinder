import './db';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import * as config from './config';
import * as routers from './routes';

const app: Application = express();

// Express middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));
app.use(cors(config.corsConfig));

// Routing information
app.use(
  '/api/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc(config.swaggerConfig),
  ),
);
app.use('/api', [
  routers.healthRouter,
  routers.locationRouter,
  routers.reportRouter,
]);

export default app;
