/**
 * @summary All Text content for the Wayfinder Application
 *          Allows for multi-language support
 * @author  LocalNewsTV
 * TODO:    Translations for:
 *            - About [x]
 *            - Main Menu
 *            - Find An Office
 *            - LocationView
 *            - ServiceView
 *            - FooterNav
 *            - Report + components
 *            - Searchbar
 *            - Terms and Conditions
 *            - Mapping
 *            - Greetings [x]
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
};

export const aboutContent: ContentMap = {
  aboutTeam: {
    eng: 'This app was developed as a capstone project for three Camosun College students in the summer of 2023. Their names and roles are:',
    fr: 'Cette application a été développée dans le cadre d\'un projet de fin d\'études pour trois étudiants du Collège Camosun à l\'été 2023. Leurs noms et rôles sont :',
  },
  tylerTitle: {
    eng: 'Tyler Maloney, Full stack Developer',
    fr: 'Tyler Maloney, Développeur Full Stack',
  },
  tylerBio: {
    eng: 'Tyler Maloney is an aspiring software developer with a fondness for problem-solving, woodworking, and learning. He has completed a series of self-directed projects, the most impressive of which is a VR FPS written in C#. Tyler also has familiarity with a bevy of languages and their associated tools, such as JavaScript, React, and Python. Tyler\'s soft skills work in fine complement to his technical abilities, as his personable and friendly demeanour helps him create professional relationships with colleagues and clients alike.',
    fr: 'Tyler Maloney est un développeur de logiciels en herbe avec un goût pour la résolution de problèmes, le travail du bois et l\'apprentissage. Il a réalisé une série de projets autodidactes, dont le plus impressionnant est un FPS en réalité virtuelle écrit en C#. Tyler a également une familiarité avec une multitude de langages et de leurs outils associés, tels que JavaScript, React et Python. Les compétences interpersonnelles de Tyler se complètent parfaitement à ses compétences techniques, car sa personnalité agréable et amicale l\'aide à créer des relations professionnelles avec ses collègues et ses clients.',
  },
  dallasTitle: {
    eng: 'Dallas Richmond, Frontend Lead',
    fr: 'Dallas Richmond, Chef Frontend',
  },
  dallasBio: {
    eng: 'Dallas Richmond has a diverse education in astronomy, physics, and information systems. He switched from astronomy and physics to pursue the ICS diploma at Camosun College due to his passion for coding and its problem-solving potential. He enhanced his React and back-end development skills during his co-op at Gist Applications. Dallas is proficient in C++, C#, Java, JavaScript, HTML and CSS. He is a quick learner, a team player, and committed to continuously improving his skills as he anticipates the future of technology',
    fr: 'Dallas Richmond possède une éducation diversifiée en astronomie, en physique et en systèmes d\'information. Il a changé d\'orientation en abandonnant l\'astronomie et la physique pour poursuivre le diplôme en systèmes informatiques à Camosun College en raison de sa passion pour la programmation et son potentiel de résolution de problèmes. Il a renforcé ses compétences en développement React et back-end lors de son stage chez Gist Applications. Dallas maîtrise le C++, le C#, Java, JavaScript, HTML et CSS. Il est un apprenant rapide, un joueur d\'équipe et engagé à améliorer continuellement ses compétences en prévision de l\'avenir de la technologie',
  },
  matthewTitle: {
    eng: 'Matthew Logan, Backend Lead',
    fr: 'Matthew Logan, Chef Backend',
  },
  matthewBio: {
    eng: 'Matthew Logan is a former Red Seal chef turned full-stack developer. Since attending Camosun College, Matthew has gained skills in web development, backend APIs and databases. Transitioning from chef to full-stack developer demonstrates his ability to pivot and adapt to new challenges. He is committed to continuous learning and improving his skills to stay current with industry trends. Matthew is a team player who collaborates effectively to deliver high-quality solutions.',
    fr: 'Matthew Logan est un ancien chef certifié Red Seal devenu développeur full-stack. Depuis qu\'il a fréquenté le Collège Camosun, Matthew a acquis des compétences en développement web, en API backend et en bases de données. La transition du métier de chef à celui de développeur full-stack démontre sa capacité à pivoter et à s\'adapter à de nouveaux défis. Il est engagé dans un apprentissage continu et l\'amélioration de ses compétences afin de rester à jour avec les tendances de l\'industrie. Matthew est un joueur d\'équipe qui collabore efficacement pour fournir des solutions de haute qualité.',
  },
  jesseTitle: {
    eng: 'Jesse Holwerda, UI/UX Designer',
    fr: 'Jesse Holwerda, Concepteur UI/UX',
  },
  jesseBio: {
    eng: 'Matthew Logan is a former Red Seal chef turned full-stack developer. Since attending Camosun College, Matthew has gained skills in web development, backend APIs and databases. Transitioning from chef to full-stack developer demonstrates his ability to pivot and adapt to new challenges. He is committed to continuous learning and improving his skills to stay current with industry trends. Matthew is a team player who collaborates effectively to deliver high-quality solutions.',
    fr: 'Matthew Logan est un ancien chef certifié Red Seal devenu développeur full-stack. Depuis qu\'il a fréquenté le Collège Camosun, Matthew a acquis des compétences en développement web, en API backend et en bases de données. La transition du métier de chef à celui de développeur full-stack démontre sa capacité à pivoter et à s\'adapter à de nouveaux défis. Il est engagé dans un apprentissage continu et l\'amélioration de ses compétences afin de rester à jour avec les tendances de l\'industrie. Matthew est un joueur d\'équipe qui collabore efficacement pour fournir des solutions de haute qualité.',
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

export const greetingContent = {
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
