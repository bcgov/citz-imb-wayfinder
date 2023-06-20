/**
 * @summary Type definition for Analytics
 * @author LocalNewsTV
 */

type Analytic = {
    latitude: Number;
    longitude: Number;
    usage: {
      search?: String;
      function: String;
    };
    date?: Date;
  };

export default Analytic;
