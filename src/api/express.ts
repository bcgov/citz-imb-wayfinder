import express, { Application } from 'express';
import healthRouter from './routes/health-routes';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import TestController, {ping} from './controllers/test-controller';

const app: Application = express();

//Express middleware
app.use(express.json());
app.use(express.static("public"));
//Routing information
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    })
)

app.use('/api', healthRouter);
app.get('/ping', ping);
app.use(morgan("tiny"));
app.use(express.static("public"));

export default app;
