/**
 * @summary setup for mongoose connection to MongoDB. Determines if running in live deployment
 *          to determine correct connection. Communicates in console whether connection is
 *          successful.
 * @author LocalNewsTV
 */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import './models/singleLocation-model';
import './models/analytic-model';
import './models/report-model';
import './models/userAccount-model';

dotenv.config();
mongoose.set('strictQuery', true);

// eslint-disable-next-line no-extra-boolean-cast
const MONGO_HOSTNAME = !!process.env.CONTAINERIZED ? process.env.MONGO_SERVICE : 'localhost';
const CONNECTION_STRING = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${MONGO_HOSTNAME}:${process.env.MONGO_PORT}`;

mongoose.connect(CONNECTION_STRING.concat(`/${process.env.MONGO_DATABASE}`));

mongoose.connection.on('connected', () => {
  console.info('Successfully connected to Mongoose');
});

mongoose.connection.on('error', (err) => {
  console.warn(`Mongoose connection error: ${err}`);
});
