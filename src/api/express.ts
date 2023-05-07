import express, { Application, Response as ExResponse, Request as ExRequest, NextFunction } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";

const app: Application = express();

//Express middleware
app.use(morgan("tiny"));
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
//Sets routes generated from TSOA to be applied to API
RegisterRoutes(app);

//Adding Global Error handler 
app.use( function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
    ): ExResponse | void {
        if (err instanceof ValidateError) {
            console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
            return res.status(422).json({
                message: "Validation Failed",
                details: err?.fields,
            });
        }
        if (err instanceof Error) {
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }
        next();
    });

export default app;
