import SettingsLocalStorage from '../Type/SettingsLocalStorage';

const LocalStorageSettingsCheck = (value: any): value is SettingsLocalStorage => (
  typeof value.location_range === 'number'
  && typeof value.offline_mode === 'boolean'
  && typeof value.analytics_opt_in === 'boolean'
  && typeof value.lang === 'string'
);

export default LocalStorageSettingsCheck;
