import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import * as config from './config';
import * as routers from './routes';

const app: Application = express();

//Express middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));

//Routing information
app.use(
    "/api/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(
        undefined, 
        config.swaggerConfig
    )
)
app.use('/api', routers.healthRouter);

export default app;
