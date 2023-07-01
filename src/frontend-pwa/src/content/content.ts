/**
 * @summary All Text content for the Wayfinder Application
 *          Allows for multi-language support
 * @author  LocalNewsTV
 * TODO:    Translations for:
 *            - Main Menu
 *            - Find An Office
 *            - LocationView
 *            - ServiceView
 *            - FooterNav
 *            - Report + components
 *            - Searchbar
 *            - About
 *            - Terms and Conditions
 */

export interface ContentMap {
  [key: string]: { [lang: string]: string };
}
export const SettingsContent: ContentMap = {
  settingsTitle: {
    eng: 'Settings',
    fr: 'Paramètres',
  },
  locationRange: {
    eng: 'Location Range',
    fr: 'Plage de localisation',
  },
  locationToolTip: {
    eng: 'Set the maximum distance for displaying location results.',
    fr: 'Définir la distance maximale pour afficher les résultats de localisation.',
  },
  offlineMode: {
    eng: 'Offline Mode',
    fr: 'Mode hors ligne',
  },
  offlineModeToolTip: {
    eng: 'Enable offline mode to save data. Only cached data on the device will be used.',
    fr: 'Activer le mode hors ligne pour économiser les données. Seules les données mises en cache sur le téléphone seront utilisées.',
  },
  analytics: {
    eng: 'Analytics',
    fr: 'Analytique',
  },
  language: {
    eng: 'Language',
    fr: 'Langue',
  },
  languageToolTip: {
    eng: 'Choose your preferred language',
    fr: 'Sélectionnez votre langue préférée',
  },
  analyticsToolTip: {
    eng: 'Choose whether to participate in anonymous analytics data collection.',
    fr: 'Choisissez si vous souhaitez participer à la collecte de données analytiques anonymes.',
  },
  aboutContact: {
    eng: 'About/Contact',
    fr: 'À propos/Contact',
  },
  license: {
    eng: 'License Agreement',
    fr: 'Contrat de licence',
  },
};

export const AboutContent = {

};
