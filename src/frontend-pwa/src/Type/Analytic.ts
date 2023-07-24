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
      serviceType: string | undefined;
      locality: string;
    }
    serviceType?: string;
    settings?: {
      valueStr?: string;
      valueBool?: boolean;
      settingType: string;
    }
    newUser?: boolean;
    appLaunch?: boolean;
  };
  date?: Date;
};

export default Analytic;
