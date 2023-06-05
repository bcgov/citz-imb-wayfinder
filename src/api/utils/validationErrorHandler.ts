/**
 * Takes the ValidationError object and tidies up the response to send back to client
 * @param error Error Object;
 * @returns {Object} Error Response
 * @example {"usage.function": "Path `usage.function` is invalid (Find n).",
             "longitude": "Path `longitude` is required."}
 * @author LocalNewsTV
 */
const validationErrorHandler = (error: any): Object => {
  if (error.name === 'ValidationError') {
    const errors: {[key:string]: any} = {};
    Object.keys(error.errors).forEach((key: string) => {
      errors[key] = error.errors[key].message;
    });
    return errors;
  }
  return { message: error.message };
};

export default validationErrorHandler;
