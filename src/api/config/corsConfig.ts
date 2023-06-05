/**
 * @summary CORS Configuration for Express API
 * @author  LocalNewsTV
 */
const corsConfig = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default corsConfig;
