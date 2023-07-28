const constants = {
  BACKEND_URL: import.meta.env.DEV ? 'http://localhost:3000' : 'https://wf-api-ec1236-dev.apps.silver.devops.gov.bc.ca',
  VER_KEY: 'V0.0.0',
  APP_DATA_KEY: 'appData',
  CURRENT_LOCATION_KEY: 'currentLocation',
  EULA_ACCEPTED_KEY: 'eulaAccepted',
  SETTINGS_KEY: 'settings',
  OFFLINE_ANALYTIC_KEY: 'analyticsOffline',
  REPORTS_KEY: 'reports',
  UNSENT_REPORTS_KEY: 'unsentReports',
  APP_INSTALL_KEY: 'appInstalled',
  MAPS_CACHED_KEY: 'mapsCached',
  UPDATE_ARRAY_KEY: 'updateArr',
  MAPS_CACHED_KEY: 'mapsCached',
  UPDATE_ARRAY_KEY: 'updateArr',
};

export default constants;
