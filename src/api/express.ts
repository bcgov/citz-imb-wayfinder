import express, { Application } from 'express';
import morgan from 'morgan';
import utilities from './utilities/index';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';

const app: Application = express();

//Express middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));

//Routing information
app.use(
    "/api/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    })
)
//Sets routes generated from TSOA to be applied to API
RegisterRoutes(app);

//Adding Global Error handler 
app.use(utilities.globalError.globalErrorHandler);

export default app;
