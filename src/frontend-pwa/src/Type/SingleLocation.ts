type SingleLocation = {
  contact?: {
    fax?: string;
    phone?: string;
  };
  services: [string];
  address: {
    province: string;
    street?: string;
    region?: string;
    county?: string;
    locality?: string;
    label?: string;
  };
  locale: string;
  website: string;
  latitude: number;
  longitude: number;
};

export default SingleLocation;
