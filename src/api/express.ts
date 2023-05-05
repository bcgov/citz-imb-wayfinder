import express from 'express';
import healthRouter from './routes/health-routes';
const app = express();

//Express middleware

//Routing information

app.use('/api', healthRouter);


export default app;