/**
 * @summary CORS Configuration for Express API
 * @author  LocalNewsTV
 */
const corsConfig = {
  origin: [
    'https://wayfinder.apps.silver.devops.gov.bc.ca/',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default corsConfig;
