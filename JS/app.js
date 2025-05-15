;(function(angular) {
  'use strict';

  // Define the main application module and its dependencies
  angular.module('app', [
    'ui.router',
    'app.common',
    'app.language',
    'app.user',
    'app.form'
  ])

  // Configure the application routes and states
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('root', {
          abstract: true,
          views: {
            '@': { templateUrl: './html/root.html' },
            'header@root': { templateUrl: './html/header.html' }
          }
        })
        .state('home', {
          url: '/home',
          templateUrl: './HTML/Home.html'
        })
        .state('education', {
          url: '/education',
          templateUrl: './HTML/iskola.html'
        })
        .state('skills', {
          url: '/skills',
          templateUrl: './HTML/skills.html'
        })
        .state('work', {
          url: '/work',
          templateUrl: './HTML/munkahely.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: './HTML/rolam.html'
        });
      $urlRouterProvider.otherwise('/home');
    }
  ])

  // Run block for initializing the application
  .run([
    'trans',
    'lang',
    'user',
    (trans, lang, user) => {
      trans.events({ group: 'user' });
      lang.init();
      user.init();
    }
  ]);

// Controllers actually used in the UI
angular.module('app')
  .controller('HomeController', ['$scope', function($scope) {
      $scope.userName = 'Norisz';
      $scope.userTitle = 'Software Developer';
      $scope.userSubtitle = 'Designer';
      $scope.userDescription = 'Szenvedélyem az olyan szoftverek és dizájnok létrehozása, amelyek kreatívan és hatékonyan kapcsolják össze a technológiát az élménnyel – hogy a felhasználók ne csak használják, hanem élvezzék is.';
      $scope.contactButtonText = 'Contact me';
      $scope.userImage = './images/me.jpg';
  }])
  .controller('FeaturesController', ['$scope', function($scope) {
      $scope.featuresTitle = 'Features';
      $scope.featuresSubtitle = 'Mit tudok nyújtani?';
      $scope.features = [
          {
              icon: 'fa fa-code',
              title: 'Web Development',
              description: 'Reszponzív és könnyen bővíthető webalkalmazások fejlesztésével foglalkozom.'
          },
          {
              icon: 'fa fa-mobile',
              title: 'Mobile Development',
              description: 'Felhasználóbarát mobilalkalmazásokat fejlesztek Android platformra.'
          },
          {
              icon: 'fa fa-database',
              title: 'Database Management',
              description: 'Hatékony adatbázis-rendszerek tervezése és kezelése.'
          }
      ];
  }])
  .controller('AboutMeController', ['$scope', function($scope) {
      $scope.aboutMeImage = './images/aboutme.png';
      $scope.aboutMeTitle = 'About Me';
      $scope.aboutMeDescription = ['Munkám során kiemelt figyelmet fordítok a maximalizmusra és a precizitásra. Könnyen megtalálom a közös hangot az emberekkel, és kifejezetten szeretek csapatban dolgozni. Segítőkész és rugalmas vagyok, mindig nyitott az új ismeretekre és a szakmai fejlődésre. Hatékonyan kezelem a problémákat, és az elém kerülő feladatokat mindig a legjobb tudásom szerint igyekszem megoldani.'
      ];
  }])
  .controller('EducationController', ['$scope', function($scope) {
      $scope.educationTitle = 'Education';
      $scope.education = [
          { degree: 'Bachelor of Science in Computer Science', institution: 'University of Technology', year: '2015 - 2019' },
          { degree: 'Master of Science in Software Engineering', institution: 'Institute of Advanced Studies', year: '2019 - 2021' }
      ];
  }])
  .controller('WorkController', ['$scope', function($scope) {
      $scope.workTitle = 'Work Experience';
      $scope.work = [
          { position: 'Software Engineer', company: 'Tech Solutions Inc.', year: '2021 - Present', description: 'Developing scalable web applications and collaborating with cross-functional teams to deliver high-quality software solutions.' },
          { position: 'Junior Developer', company: 'Innovative Apps', year: '2019 - 2021', description: 'Assisted in building user-friendly mobile applications and contributed to the development of backend APIs.' }
      ];
  }])
  .controller('SkillsController', ['$scope', function($scope) {
      $scope.skillsTitle = 'Skills';
      $scope.skills = [
          {
              category: 'FRONT-END',
              details: 'HTML, CSS, JAVASCRIPT (ANGULARJS), BOOTSTRAP',
              level: 80
          },
          {
              category: 'BACK-END',
              details: 'PHP, MYSQL, PYTHON',
              level: 60
          },
          {
              category: 'MOBILALKALMAZÁS',
              details: 'C#, .NET',
              level: 35
          },
          {
              category: 'ADATBÁZIS KEZELÉS',
              details: 'SQL (MYSQL)',
              level: 85
          }
      ];
  }])
  .controller('TimelineController', ['$scope', function($scope) {
      $scope.education = [
          {
              degree: 'Szoftverfejlesztő és tesztelő (felnőttképzés)',
              institution: 'HSZC Návay Lajos Technikum és Kollégium, Makó',
              year: '2022-2024',
              description: 'Képzés a modern szoftverfejlesztési és tesztelési technikák elsajátítására.'
          },
          {
              degree: 'Érettségi',
              institution: 'Jankó János Általános Iskola és Gimnázium',
              year: '2019-2020',
              description: 'Általános középiskolai tanulmányok befejezése érettségivel.'
          },
          {
              degree: 'Rendészeti szak',
              institution: 'Gyulai SZC Kossuth Lajos Szakgimnáziuma, Szakközépiskolája és Kollégiuma',
              year: '2016-2019',
              description: 'Rendészeti alapismeretek és gyakorlati képzés.'
          }
      ];
      $scope.work = [
          {
              position: 'Alkalmazott',
              company: 'Cifra-szűr KFT',
              year: '2021-2022',
              description: 'Feladatok ellátása a cég napi működésének támogatására.'
          },
          {
              position: 'Alkalmazott',
              company: 'Aneszbau Építő és Szolgáltató Kft.',
              year: '2019-2020',
              description: 'Építőipari és szolgáltatási feladatok végrehajtása.'
          }
      ];
  }])
  .controller('HobbiesController', ['$scope', function($scope) {
      $scope.hobbies = [
          {
              name: 'Foci',
              image: './images/football.png',
              description: 'Szeretek focizni a barátaimmal és nézni a mérkőzéseket.'
          },
          {
              name: 'Horgászat',
              image: './images/fishing.png',
              description: 'A természetben eltöltött idő és a horgászat nyugalma feltölt.'
          },
          {
              name: 'Főzés',
              image: './images/cooking.png',
              description: 'Új recepteket kipróbálni és finom ételeket készíteni a családnak.'
          },
          {
              name: 'Gaming',
              image: './images/gaming.png',
              description: 'Kedvenc játékaimmal kikapcsolódni és új világokat felfedezni.'
          }
      ];
  }])
  .controller('ProfessionsController', ['$scope', function($scope) {
      $scope.professions = [
          {
              name: 'Hentes Szakma',
              image: './images/butcher.png',
              description: 'Tapasztalatot szereztem a húsfeldolgozás és értékesítés területén.'
          },
          {
              name: 'Szűcs Szakma',
              image: './images/tailor.png',
              description: 'A szűcs mesterség alapjait sajátítottam el, beleértve a bőrmegmunkálást.'
          },
          {
              name: 'Rendészet',
              image: './images/law.png',
              description: 'Megismerkedtem a rendészeti alapismeretekkel és gyakorlati képzésekkel.'
          }
      ];
  }])
  .controller('LanguagesLicenseController', ['$scope', function($scope) {
      $scope.languages = [
          { name: 'Angol', level: 'Középfok (B2)' }
      ];
      $scope.license = 'B kategória';
  }])
  .controller('NavbarController', ['$scope', '$window', function($scope, $window) {
      $scope.navbarItems = [
          { name: 'Home', link: 'home' },
          { name: 'Features', link: 'features' },
          { name: 'About Me', link: 'about-me' },
          { name: 'Timeline', link: 'timeline' },
          { name: 'Skills', link: 'skills' },
          { name: 'Hobbies', link: 'hobbies' },
          { name: 'Professions', link: 'professions' },
          { name: 'Languages & License', link: 'languages-license' }
      ];
      $scope.scrollTo = function(sectionId) {
          var el = document.getElementById(sectionId);
          if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      };
  }]);
  
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
});
})(angular);