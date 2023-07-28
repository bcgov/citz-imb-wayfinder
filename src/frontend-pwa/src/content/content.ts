/**
 * @summary All Text content for the Wayfinder Application
 *          Allows for multi-language support
 * @author  LocalNewsTV
 */

export interface ContentMap {
  [key: string]: { [lang: string]: any };
}

/**
 * Settings View Text
 */
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
  changeLog: {
    eng: 'What\'s New?',
    fr: 'Quoi de neuf?',
  },
  refreshData: {
    eng: 'Refresh App Data',
    fr: 'Actualiser les données de l\'application',
  },
  refreshDataToolTip: {
    eng: 'Pull in new location data from the server',
    fr: 'Récupérer de nouvelles données de localisation à partir du serveur',
  },
  refreshDataButtonTextRefresh: {
    eng: 'Refresh',
    fr: 'Rafraîchir',
  },
  refreshDataButtonTextOffline: {
    eng: 'Offline',
    fr: 'Hors ligne',
  },
  offlineMapTilesTitle: {
    eng: 'Offline Map Tiles',
    fr: 'Tuiles de carte hors ligne',
  },
  offlineMapTilesToolTip: {
    eng: 'To decrease app size, you can delete the saved tiles. This will prevent offline map functionality.',
    fr: 'Pour réduire la taille de l\'application, vous pouvez supprimer les vignettes enregistrées. Cela empêchera la fonctionnalité de carte hors ligne.',
  },
  clearCache: {
    eng: 'Delete Data',
    fr: 'Suprimmer les données',
  },
  clearCacheToolTip: {
    eng: 'Deletes the cached map data.',
    fr: 'Supprime les données de site mises en cache.',
  },
  clearCacheConfirmText: {
    eng: 'Are you sure you want to clear the cache data? Offline map will be unavailable.',
    fr: 'Voulez-vous vraiment effacer les données du cache ? La carte hors ligne ne sera pas disponible.',
  },
  clearCacheButtonConfirm: {
    eng: 'Confirm',
    fr: 'Confirmer',
  },
  clearCacheButtonCancel: {
    eng: 'Cancel',
    fr: 'Annuler',
  },
  languages: {
    eng: [
      'English',
      'French',
    ],
    fr: [
      'Anglais',
      'Français',
    ],
    keys: [
      'eng',
      'fr',
    ],
  },
};

export const aboutContent: ContentMap = {
  aboutTeam: {
    eng: 'This app was developed as a Capstone project for three Camosun College students in the summer of 2023. Their names and roles are:',
    fr: 'Cette application a été développée dans le cadre d\'un projet de fin d\'études pour trois étudiants du Collège Camosun à l\'été 2023. Leurs noms et rôles sont :',
  },
  tylerTitle: {
    eng: 'Tyler Maloney, Full Stack Developer',
    fr: 'Tyler Maloney, Développeur Full Stack',
  },
  tylerBio: {
    eng: 'Tyler Maloney is an aspiring software developer with a fondness for problem-solving, woodworking, and learning. He has completed a series of self-directed projects, the most impressive of which is a VR FPS written in C#. Tyler also has familiarity with a bevy of languages and their associated tools, such as JavaScript, React, and Python. Tyler\'s soft skills work in fine complement to his technical abilities, as his personable and friendly demeanour helps him create professional relationships with colleagues and clients alike.',
    fr: 'Tyler Maloney est un développeur de logiciels en herbe avec un goût pour la résolution de problèmes, le travail du bois et l\'apprentissage. Il a réalisé une série de projets autodidactes, dont le plus impressionnant est un FPS en réalité virtuelle écrit en C#. Tyler a également une familiarité avec une multitude de langages et de leurs outils associés, tels que JavaScript, React et Python. Les compétences interpersonnelles de Tyler se complètent parfaitement à ses compétences techniques, car sa personnalité agréable et amicale l\'aide à créer des relations professionnelles avec ses collègues et ses clients.',
  },
  dallasTitle: {
    eng: 'Dallas Richmond, Full Stack Developer',
    fr: 'Dallas Richmond, Développeur Full Stack',
  },
  dallasBio: {
    eng: 'Dallas Richmond has a diverse education in astronomy, physics, and information systems. He switched from astronomy and physics to pursue the ICS diploma at Camosun College due to his passion for coding and its problem-solving potential. He enhanced his React and back-end development skills during his co-op at Gist Applications. Dallas is proficient in C++, C#, Java, JavaScript, HTML and CSS. He is a quick learner, a team player, and committed to continuously improving his skills as he anticipates the future of technology',
    fr: 'Dallas Richmond possède une éducation diversifiée en astronomie, en physique et en systèmes d\'information. Il a changé d\'orientation en abandonnant l\'astronomie et la physique pour poursuivre le diplôme en systèmes informatiques à Camosun College en raison de sa passion pour la programmation et son potentiel de résolution de problèmes. Il a renforcé ses compétences en développement React et back-end lors de son stage chez Gist Applications. Dallas maîtrise le C++, le C#, Java, JavaScript, HTML et CSS. Il est un apprenant rapide, un joueur d\'équipe et engagé à améliorer continuellement ses compétences en prévision de l\'avenir de la technologie',
  },
  matthewTitle: {
    eng: 'Matthew Logan, Team Lead',
    fr: 'Matthew Logan, Chef d\'équipe',
  },
  matthewBio: {
    eng: 'Matthew Logan is a former Red Seal chef turned full-stack developer. Since attending Camosun College, Matthew has gained skills in web development, backend APIs and databases. Transitioning from chef to full-stack developer demonstrates his ability to pivot and adapt to new challenges. He is committed to continuous learning and improving his skills to stay current with industry trends. Matthew is a team player who collaborates effectively to deliver high-quality solutions.',
    fr: 'Matthew Logan est un ancien chef certifié Red Seal devenu développeur full-stack. Depuis qu\'il a fréquenté le Collège Camosun, Matthew a acquis des compétences en développement web, en API backend et en bases de données. La transition du métier de chef à celui de développeur full-stack démontre sa capacité à pivoter et à s\'adapter à de nouveaux défis. Il est engagé dans un apprentissage continu et l\'amélioration de ses compétences afin de rester à jour avec les tendances de l\'industrie. Matthew est un joueur d\'équipe qui collabore efficacement pour fournir des solutions de haute qualité.',
  },
  imbMembers: {
    eng: [
      'Adam Kroon, Technical Owner',
      'Jesse Holwerda, UX Perspective',
      'Meghan Peebles, Scrum Master',
      'Robert Kobenter, Product Owner',
    ],
    fr: [
      'Adam Kroon, Propriétaire technique',
      'Jesse Holwerda, Perspective UX',
      'Meghan Peebles, Scrum Master',
      'Robert Kobenter, Propriétaire du produit',
    ],
  },
  withThanks: {
    eng: 'Team Wayfinder extends its deepest gratitude to the esteemed staff members of IMB for their invaluable guidance throughout our transformative Capstone semester at Camosun College. We wholeheartedly appreciate the unwavering support and direction provided by each individual, which proved instrumental in steering our journey towards success. Your unwavering commitment to our growth and development has left an indelible mark on our team, and we are sincerely thankful for the wealth of knowledge and expertise you generously shared.',
    fr: 'L\'équipe Wayfinder exprime sa plus profonde gratitude envers les estimés membres du personnel d\'IMB pour leur précieuse guidance tout au long de notre semestre de projet de fin d\'études à Camosun College. Nous apprécions sincèrement le soutien inébranlable et les conseils prodigués par chaque individu, qui ont joué un rôle déterminant dans notre parcours vers le succès. Votre engagement indéfectible envers notre croissance et notre développement a laissé une empreinte indélébile sur notre équipe, et nous vous remercions sincèrement pour la richesse de connaissances et d\'expertise que vous avez généreusement partagées.',
  },
  withThanksTitle: {
    eng: 'Special Thanks',
    fr: 'Remerciements spéciaux',
  },
  disclaimer: {
    eng: [
      'This project is open sourced for fair use, with attribution',
      'this work carries no warranty or implied guarantee',
      'All third party libraries are those of their rightful owners or licensees',
      'BC Government theme © by the Government of BC',
    ],
    fr: [
      'Ce projet est open source pour une utilisation équitable, avec attribution',
      'ce travail ne comporte aucune garantie explicite ou implicite',
      'Toutes les bibliothèques tierces appartiennent à leurs propriétaires légitimes ou titulaires de licence',
      'Thème du gouvernement de la Colombie-Britannique © par le gouvernement de la Colombie-Britannique',
    ],
  },
  about: {
    eng: 'Wayfinder is an app that points people towards the government services they need. This is a proof of concept that provides an extensible platform to add new services and locations to over time. It is also a powerful analytics tool showing where people are and what they need which can help us know what services to create going forward!',
    fr: 'Wayfinder est une application qui guide les personnes vers les services gouvernementaux dont elles ont besoin. Il s\'agit d\'une preuve de concept qui fournit une plateforme extensible permettant d\'ajouter de nouveaux services et lieux au fil du temps. C\'est également un puissant outil d\'analyse montrant où se trouvent les personnes et ce dont elles ont besoin, ce qui peut nous aider à savoir quels services créer à l\'avenir !',
  },
  contact: {
    eng: 'Reach out to us and tell us your thoughts! We are building something new and welcome any growth opportunities you can give us. We will do our best to be available and responsive to your feedback. Thank you for being a part of Wayfinder!',
    fr: 'Communiquez avec nous et faites-nous part de vos réflexions ! Nous construisons quelque chose de nouveau et nous accueillons toutes les opportunités de croissance que vous pouvez nous offrir. Nous ferons de notre mieux pour être disponibles et réactifs à vos commentaires. Merci de faire partie de Wayfinder !',
  },
  aboutTitle: {
    eng: 'About',
    fr: 'À propos',
  },
  disclaimerTitle: {
    eng: 'Disclaimer',
    fr: 'Avertissement',
  },
  emailTitle: {
    eng: 'Email',
    fr: 'Courriel',
  },
  mailingAddressTitle: {
    eng: 'Mailing Address',
    fr: 'Adresse postale',
  },
  githubRepo: {
    eng: 'GitHub Repo',
    fr: 'Dépôt GitHub',
  },
  viewIt: {
    eng: 'View it here',
    fr: 'Voir ici',
  },
  contactTitle: {
    eng: 'Contact',
    fr: 'Contact',
  },
};

export const greetingContent: ContentMap = {
  eng: [
    'Welcome, what are you looking to do?',
    'Let\'s get started',
    'What are you looking for today?',
    'Connecting citizens to services',
    'Are you looking to report an event?',
    'We hope you are having a good day',
    'Let\'s connect you with the services you need',
    'We are so happy you are here',
    'Jump in and find what you need',
    'How can we help you?',
  ],
  fr: [
    'Bienvenue, que souhaitez-vous faire ?',
    'Commençons',
    'Que recherchez-vous aujourd\'hui ?',
    'Relier les citoyens aux services',
    'Souhaitez-vous signaler un événement ?',
    'Nous espérons que vous passez une bonne journée',
    'Connectons-vous aux services dont vous avez besoin',
    'Nous sommes tellement heureux que vous soyez là',
    'Plongez et trouvez ce dont vous avez besoin',
    'Comment pouvons-nous vous aider ?',
  ],
};

export const homeContent: ContentMap = {
  findOffice: {
    eng: 'Find an office',
    fr: 'Trouver un bureau',
  },
  findService: {
    eng: 'Find a service',
    fr: 'Trouver un service',
  },
  report: {
    eng: 'Report an event',
    fr: 'Signaler un événement',
  },
};

export const locationContent: ContentMap = {
  headers: {
    eng: [
      'Locations',
      'Distance',
    ],
    fr: [
      'Emplacements',
      'Distance',
    ],
  },
  unavailable: {
    eng: 'Sorry, this feature is currently unavailable offline.',
    fr: 'Désolé, cette fonctionnalité n\'est actuellement pas disponible hors ligne.',
  },
  notImplemented: {
    eng: 'Sorry, this service is currently not implemented.',
    fr: 'Désolé, ce service n\'est actuellement pas implémenté.',
  },
  noResults: {
    eng: 'No results within',
    fr: 'Aucun résultat dans un rayon de ',
  },
};

export const officeOptionsContent: ContentMap = {
  serviceBC: {
    eng: 'Service BC',
    fr: 'Service BC',
  },
  healthBC: {
    eng: 'Hospitals',
    fr: 'Hôpitaux',
  },
  courts: {
    eng: 'Provincial Courts',
    fr: 'Cours provinciales',
  },
  icbc: {
    eng: 'ICBC',
    fr: 'ICBC',
  },
  bcHousing: {
    eng: 'BC Housing',
    fr: 'Logement en BC',
  },
};

export const reportContent: ContentMap = {
  enterDetails: {
    eng: 'Enter event details...',
    fr: 'Entrez les détails de l\'événement...',
  },
  phoneLabel: {
    eng: 'Phone number (optional):',
    fr: 'Numéro de téléphone (facultatif):',
  },
  reportSentSuccess: {
    eng: 'Report sent',
    fr: 'Rapport envoyé',
  },
  reportFailure: {
    eng: 'Unable to submit report.',
    fr: 'Impossible de soumettre le rapport.',
  },
  reportNetworkFailure: {
    eng: 'Offline: Report saved for future online submission.',
    fr: 'Hors ligne : rapport enregistré pour une future soumission en ligne.',
  },
  detailsLabel: {
    eng: 'Event details:',
    fr: 'Détails de l\'événement :',
  },
  eventTypeLabel: {
    eng: 'Event type:',
    fr: 'Type d\'événement:',
  },
  eventTypeOptionLabel: {
    eng: 'Select an Event Type',
    fr: 'Sélectionnez un type d\'événement',
  },
  reportLabel: {
    eng: 'Report an Event',
    fr: 'Signaler un événement',
  },
  minLengthValidationFailure: {
    eng: 'Minimum message length is 10 characters.',
    fr: 'La longueur minimale du message est de 10 caractères.',
  },
  invalidPhone: {
    eng: 'Invalid Format. Example: (250) 555-5555',
    fr: 'Format invalide. Exemple : (250) 555-5555',
  },
  reportOptions: {
    eng: [
      'Damaged Infrastructure',
      'Animal Sighting',
      'Suggestion/Complaint',
      'Miscellaneous',
    ],
    fr: [
      'Infrastructure endommagée',
      'Observation d\'animaux',
      'Suggestion/plainte',
      'Divers',
    ],
  },
  submit: {
    eng: 'Submit',
    fr: 'Soumettre',
  },
  history: {
    eng: 'History',
    fr: 'Histoire',
  },
};

export const footerContent: ContentMap = {
  home: {
    eng: 'Home',
    fr: 'Accueil',
  },
  offices: {
    eng: 'Offices',
    fr: 'Bureaux',
  },
  services: {
    eng: 'Services',
    fr: 'Services',
  },
  report: {
    eng: 'Report',
    fr: 'Signaler',
  },
};

export const notFoundContent: ContentMap = {
  allWeKnow: {
    eng: 'That\'s all we know',
    fr: 'C\'est tout ce que nous savons',
  },
  notFound: {
    eng: 'Not Found',
    fr: 'Non trouvé',
  },
  anError: {
    eng: 'That\'s an error',
    fr: 'Une erreur s\'est produite',
  },
  requestedURL: {
    eng: 'The requested URL ',
    fr: 'L\'URL demandée ',
  },
  notFoundHere: {
    eng: ' was not found on this server. ',
    fr: ' n\'a pas été trouvée sur ce serveur. ',
  },
  returnHome: {
    eng: 'Main Page',
    fr: 'Page Principale',
  },
};

export const searchBarContent: ContentMap = {
  placeholder: {
    eng: 'Filter Search',
    fr: 'Filtrer la recherche',
  },
};

export const eulaContent: ContentMap = {
  terms: {
    eng: 'Terms and Conditions',
    fr: 'Conditions générales',
  },
  eulaOne: {
    eng: 'The BC Wayfinder App (the "Licensed Application") allows you ("You" or "you") to find local government services. This End User License Agreement ("EULA") sets out the terms and conditions that apply to you when you download and/or use the BC Wayfinder App. This EULA is a legal agreement between you, as the end user of the Licensed Application ("You" or "you"), and His Majesty the King in Right of the Province of British Columbia (the "Province"). You may access the Licensed Application on either a Google or Apple mobile device, or a computer. Some of the terms that follow reference Google or Apple, as applicable, and such references will apply only to the extent that you are accessing the Licensed Application through that particular platform. By indicating that you agree to this EULA, and in consideration of the use of the Licensed Application, you agree to the following.',
    fr: 'L\'application BC Wayfinder (l\'"Application sous licence") vous permet de trouver des services gouvernementaux locaux. Le présent contrat de licence d\'utilisateur final (l\'"CLUF") énonce les conditions qui s\'appliquent lorsque vous téléchargez et/ou utilisez l\'application BC Wayfinder. Ce CLUF constitue un accord juridique entre vous, en tant qu\'utilisateur final de l\'application sous licence (vous ou "l\'Utilisateur"), et Sa Majesté le Roi, agissant au nom de la province de la Colombie-Britannique (la "Province"). Vous pouvez accéder à l\'application sous licence sur un appareil mobile Google ou Apple, ou sur un ordinateur. Certains termes utilisés ci-dessous font référence à Google ou Apple, le cas échéant, et ces références s\'appliqueront uniquement dans la mesure où vous accédez à l\'application sous licence via cette plateforme particulière. En indiquant que vous acceptez ce CLUF, et en contrepartie de l\'utilisation de l\'application sous licence, vous acceptez les dispositions suivantes.',
  },
  eulaTwo: {
    eng: 'To accept the terms and conditions of this EULA and to download and/or use the Licensed Application, you must be, and you represent and warrant that you are: (a) at least nineteen (19) years of age; or (b) if you are under 19, you have obtained the consent of your parent or guardian to accept this Agreement on your behalf, in which case your parent or guardian is responsible for your use of the Licensed Application. If you have not met these requirements, you must not access or use the Licensed Application.',
    fr: 'Pour accepter les termes et conditions de ce CLUF et télécharger et/ou utiliser l\'application sous licence, vous devez être, et vous déclarez et garantissez que vous êtes : (a) âgé d\'au moins dix-neuf (19) ans ; ou (b) si vous avez moins de 19 ans, vous avez obtenu le consentement de votre parent ou tuteur pour accepter cet accord en votre nom, auquel cas votre parent ou tuteur est responsable de votre utilisation de l\'application sous licence. Si vous ne répondez pas à ces exigences, vous ne devez pas accéder à l\'application sous licence ni l\'utiliser.',
  },
  eulaThree: {
    eng: 'The License will terminate automatically in the event that you fail to comply with any of the terms and conditions of this EULA or if any of your representations or warranties are or become inaccurate or untruthful. The Province also reserves the right to terminate this License for any reason, in its sole discretion. In the event of termination of this License you must: (a) immediately stop using the Licensed Application; and (b) delete or destroy all copies of the Licensed Application in your possession or under your control.',
    fr: 'La licence prendra fin automatiquement en cas de non-respect de l\'une des modalités de ce CLUF ou si l\'une de vos déclarations ou garanties est ou devient inexacte ou mensongère. La Province se réserve également le droit de résilier cette licence pour quelque raison que ce soit, à sa seule discrétion. En cas de résiliation de cette licence, vous devez : (a) cesser immédiatement d\'utiliser l\'application sous licence ; et (b) supprimer ou détruire toutes les copies de l\'application sous licence en votre possession ou sous votre contrôle.',
  },
  eulaFour: {
    eng: 'You must not take any action in connection with your use of the Licensed Application that would jeopardize the security, integrity and/or availability of the Licensed Application, including, without limitation:',
    fr: 'Vous ne devez entreprendre aucune action en relation avec votre utilisation de l\'application sous licence qui compromettrait la sécurité, l\'intégrité et/ou la disponibilité de l\'application sous licence, y compris, sans s\'y limiter :',
  },
  eulaList: {
    eng: [
      '(a) using the Licensed Application for any unlawful or inappropriate purpose;',
      '(b) tampering with any portion of the Licensed Application;',
      '(c) using the Licensed Application to transmit any virus or other harmful or destructive computer code, files or programs or to conduct hacking and/or intrusion activities;',
      '(d) attempting to circumvent or subvert any security measure associated with the Licensed Application;',
      '(e) taking any action that might reasonably be construed as likely to adversely affect other users of the Licensed Application; or',
      '(f) removing or altering any proprietary symbol or notice, including any copyright notice, trademark or logo, displayed in connection with the Licensed Application.',
    ],
    fr: [
      "(a) utiliser l'Application sous licence à des fins illégales ou inappropriées ;",
      "(b) altérer une partie de l'Application sous licence ;",
      "(c) utiliser l'Application sous licence pour transmettre tout virus ou autre code informatique nuisible ou destructeur, des fichiers ou des programmes, ou pour mener des activités de piratage et/ou d'intrusion ;",
      "(d) tenter de contourner ou de subvertir toute mesure de sécurité associée à l'Application sous licence ;",
      "(e) prendre toute mesure qui pourrait raisonnablement être interprétée comme susceptible d'affecter négativement les autres utilisateurs de l'Application sous licence ; ou",
      "(f) supprimer ou modifier tout symbole ou avis de propriété, y compris tout avis de droit d'auteur, marque commerciale ou logo, affiché en relation avec l'Application sous licence.",
    ],
  },
  eulaFive: {
    eng: 'This EULA and, as applicable, the additional terms referenced in these Terms, are the entire agreement between you and the Province with respect to the subject matter of this EULA. The headings in these Terms are inserted for convenience only and will not be used in interpreting or construing any provision of this EULA. If any provision of this EULA is invalid, illegal or unenforceable, that provision will be severed from this EULA and all other provisions will remain in full force and effect. This EULA will be governed by and construed in accordance with the laws of the province of British Columbia and the applicable laws of Canada. By using the Licensed Application, you consent to the exclusive jurisdiction and venue of the courts of the province of British Columbia, sitting in Victoria, for the hearing of any dispute arising from or related to this EULA and its subject matter.',
    fr: 'Cette CLUF et, le cas échéant, les termes supplémentaires mentionnés dans ces Conditions, constituent l\'intégralité de l\'accord entre vous et la Province en ce qui concerne l\'objet de cette CLUF. Les titres dans ces Conditions sont insérés uniquement pour votre commodité et ne seront pas utilisés pour interpréter ou interpréter toute disposition de cette CLUF. Si une disposition de cette CLUF est invalide, illégale ou inapplicable, cette disposition sera dissociée de cette CLUF et toutes les autres dispositions resteront en vigueur. Cette CLUF sera régie par les lois de la province de la Colombie-Britannique et les lois applicables du Canada. En utilisant l\'Application sous licence, vous consentez à la compétence exclusive et au ressort des tribunaux de la province de la Colombie-Britannique, siégeant à Victoria, pour l\'audition de tout litige découlant de cette CLUF et de son objet.',
  },
  eulaSix: {
    eng: 'The Parties acknowledge that: (a) the Province may, in its sole discretion, provide maintenance and support of the Licensed Application, including troubleshooting, updates and modifications (the \'Support Services\'); (b) the Province is solely responsible for the provision of Support Services, if any; and (c) Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.',
    fr: 'Les Parties reconnaissent que : (a) la Province peut, à sa seule discrétion, fournir des services de maintenance et de support de l\'Application sous licence, y compris le dépannage, les mises à jour et les modifications (les \'Services de support\'); (b) la Province est seule responsable de la fourniture des Services de support, le cas échéant; et (c) Apple n\'a aucune obligation de fournir des services de maintenance et de support en ce qui concerne l\'Application sous licence.',
  },
  agreeStatement: {
    eng: 'If you agree to the previous terms, check the box below and click the agree button.',
    fr: 'Si vous acceptez les termes précédents, cochez la case ci-dessous et cliquez sur le bouton \'Accepter\'.',
  },
  submit: {
    eng: 'Submit',
    fr: 'Soumettre',
  },
};

export const locationInfoContent: ContentMap = {
  phoneLabel: {
    eng: 'Phone number: ',
    fr: 'Numéro de téléphone : ',
  },
  faxLabel: {
    eng: 'Fax number: ',
    fr: 'Numéro de fax : ',
  },
  addressLabel: {
    eng: 'Address: ',
    fr: 'Adresse : ',
  },
  postalLabel: {
    eng: 'Postal Code: ',
    fr: 'Code postal : ',
  },
  websiteLabel: {
    eng: 'Website',
    fr: 'Site web',
  },
  website: {
    eng: 'Official Website',
    fr: 'Site web officiel',
  },
  listHeader: {
    eng: ['Services offered at this location'],
    fr: ['Services offerts à cet emplacement'],
  },
};

export const mappingContent: ContentMap = {
  currLocation: {
    eng: 'Current Location: ',
    fr: 'Emplacement actuel: ',
  },
  currLat: {
    eng: 'Current Latitude: ',
    fr: 'Latitude actuelle: ',
  },
  currLong: {
    eng: 'Current Longitude: ',
    fr: 'Longitude actuelle: ',
  },
  type: {
    eng: 'Type: ',
    fr: 'Type: ',
  },
  address: {
    eng: 'Address: ',
    fr: 'Adresse: ',
  },
  phone: {
    eng: 'Phone Number: ',
    fr: 'Numéro de téléphone: ',
  },
};

export const reportHistoryContent: ContentMap = {
  historyHeader: {
    eng: 'Report History',
    fr: 'Historique des rapports',
  },
  headers: {
    eng: [
      'Date',
      'Event Type',
      '',
    ],
    fr: [
      'Date',
      'Type d\'événement',
      '',
    ],
  },
  noReports: {
    eng: 'No reports in history.',
    fr: 'Aucun rapport dans l\'historique.',
  },
  detailsTitle: {
    eng: 'Details:',
    fr: 'Détails:',
  },
  eventTypeTitle: {
    eng: 'Event Type:',
    fr: 'Type d\'événement:',
  },
  locationTitle: {
    eng: 'Report Location:',
    fr: 'Lieu du rapport:',
  },
  locationTip: {
    eng: 'Here are the recorded geographical coordinates (latitude and longitude) when your report was submitted.',
    fr: 'Voici les coordonnées géographiques enregistrées (latitude et longitude) lorsque votre rapport a été soumis.',
  },
  ticketNumTitle: {
    eng: 'Ticket #:',
    fr: 'Numéro de ticket#:',
  },
  ticketNumTip: {
    eng: 'This is the reference number for your submitted report.',
    fr: 'Il s\'agit du numéro de référence de votre rapport qui a été soumis.',
  },
  submitTitle: {
    eng: 'Date Submitted:',
    fr: 'Date de soumission:',
  },
  placeholder: {
    eng: 'Report details...',
    fr: 'Détails du rapport...',
  },
  noValue: {
    eng: 'N/A',
    fr: 'N/A',
  },
};
