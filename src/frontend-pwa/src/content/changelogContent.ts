/**
 * @desc   Changelog content displayed in the Wayfinder application.
 * @author LocalNewsTV
 */
export interface ContentMap {
  [key: string]: { [lang: string]: String[] };
}

const ChangeLog: ContentMap = {
  '1.0.0': {
    eng: [
      'Added ability to delete and recache map tiles',
      'Changed the secondary button color',
    ],
    fr: [
      'Ajout de la possibilité de supprimer et de remettre en cache des tuiles de carte',
      'Modification de la couleur du bouton secondaire',
    ],
  },
  '0.9.0': {
    eng: [
      'Settings view revamped to new modern design',
      'Colors swapped in main view button',
      'What\'s new section added!',
    ],
    fr: [
      'Vue des paramètres repensée avec un nouveau design moderne',
      'Les couleurs des boutons de la vue principale ont été échangées',
      'Section "Quoi de neuf" ajoutée !',
    ],
  },
  '0.8.1': {
    eng: [
      'Report History was created',
      'More Location Info was created',
    ],
    fr: [
      'L\'historique des rapports a été créé',
      'Plus d\'informations sur l\'emplacement ont été créées',
    ],
  },
  '0.7.7': {
    eng: [
      'Added Language functionality',
      'Added Analytic functionality',
      'Offline Mapping added',
    ],
    fr: [
      'Fonctionnalité de langue ajoutée',
      'Fonctionnalité d\'analyse ajoutée',
      'Cartographie hors ligne ajoutée',
    ],
  },
  '0.0.5': {
    eng: [
      'Initial functionality for Reports added',
      'Initial functionality for Mapping added',
      'Initial functionality for Offline Mode added',
    ],
    fr: [
      'Fonctionnalité initiale pour les rapports ajoutée',
      'Fonctionnalité de cartographie initiale ajoutée',
      'Fonctionnalité initiale du mode hors ligne ajoutée',
    ],
  },
  '0.0.1': {
    eng: [
      'Creation of initial VITE shell',
    ],
    fr: [
      'Création de la coquille initiale VITE',
    ],
  },
};

export default ChangeLog;
