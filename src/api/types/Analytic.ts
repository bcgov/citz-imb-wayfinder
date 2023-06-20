/**
 * @summary Type definition for Analytics
 * @author LocalNewsTV
 */

type Analytic = {
  latitude: number;
  longitude: number;
  usage: {
    search?: string;
    function: string;
  };
  date?: Date;
};

export default Analytic;
