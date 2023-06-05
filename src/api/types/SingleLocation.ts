/**
 * @summary Model type for SingleLocation of BC Service Office
 * @author  LocalNewsTV
 */
type SingleLocation = {
  contact?: {
    fax?: String;
    phone?: String;
  };
  services: [String];
  address: {
    province: String;
    street?: String;
    region?: String;
    county?: String;
    locality?: String;
    label?: String;
  };
  locale: String;
  website: String;
  latitude: Number;
  longitude: number;
};

export default SingleLocation;
