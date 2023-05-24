/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true);

// eslint-disable-next-line no-extra-boolean-cast
const MONGO_HOSTNAME = !!process.env.CONTAINERIZED ? process.env.MONGO_SERVICE : 'localhost';
mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${MONGO_HOSTNAME}:${process.env.MONGO_PORT}`);

mongoose.connection.on('connected', () => {
  console.info('Successfully connected to Mongoose');
});

mongoose.connection.on('error', (err) => {
  console.warn(`Mongoose connection error: ${err}`);
});
