import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';
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

app.use(morgan("tiny"));
app.use(express.static("public"));
RegisterRoutes(app);
export default app;
