type CurrentLocation = {
  coords?: {
    accuracy?: number;
    altitude?: number;
    altitudeAccuracy?: number;
    heading?: number;
    latitude: number;
    longitude: number;
    speed?: number;
  };
  timestamp?: number;
};

export default CurrentLocation;
