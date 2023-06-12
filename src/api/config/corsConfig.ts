/**
 * @summary CORS Configuration for Express API
 * @author  LocalNewsTV
 */
const corsConfig = {
  origin: [
    'https://wayfinder.apps.silver.devops.gov.bc.ca',
    'http://localhost:5173',
    'http://localhost:4173',
    'http://localhost:3030',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

export default corsConfig;
