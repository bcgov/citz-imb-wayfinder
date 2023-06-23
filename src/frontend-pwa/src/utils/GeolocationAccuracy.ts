/* eslint-disable no-console */
export const errorHighAccuracy = (error: any) => {
  if (error.code === error.TIMEOUT) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorLowAccuracy,
      { maximumAge: 600000, timeout: 10000, enableHighAccuracy: false },
    );
    return;
  }
  if (error.code === 1) console.log('PERMISSION_DENIED');
  else if (error.code === 2) console.log('POSITION_UNAVAILABLE');
};

export const errorLowAccuracy = (error: any) => {
  console.log('Can not get high accuracy, trying low');
  if (error.code === 1) console.log('PERMISSION_DENIED');
  else if (error.code === 2) console.log('POSITION_UNAVAILABLE');
  else if (error.code === 3) console.log('TIMEOUT');
};

export const successCallback = (position: any) => {
  const lat = position.coords.latitude;
  const { longitude } = position.coords.longitude;
  console.log('lat: ', lat);
};
