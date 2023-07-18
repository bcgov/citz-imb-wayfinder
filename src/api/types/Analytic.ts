/**
 * @summary Type definition for Analytics
 * @author LocalNewsTV
 */

type Analytic = {
  latitude: number;
  longitude: number;
  usage: {
    search?: string;
    function?: string;
    closestOffice?: {
      serviceType: string;
      locality: string;
    }
    serviceType?: string;
    settings?: {
      valueStr?: string;
      valueBool?: boolean;
      type: string;
    }
    newUser?: boolean
  };
  date?: Date;
};

export default Analytic;
