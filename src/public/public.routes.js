(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];

function routeConfig ($stateProvider,$locationProvider, $urlRouterProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })


    //working one
    
    .state('registration', {
      url: '/register',
      templateUrl: 'src/public/mystuff/myForm.html',
      controller:'formcontroller'
    })



    //testing - working
    /*
     .state('registration', {
      url: '/register',
      //templateUrl: 'src/public/mystuff/myForm.html',
      controller:'formcontroller',
      resolve: {
        reg: ['$stateParams','MenuService', function ($stateParams, MenuService) {
           reginfo= MenuService.getRegistration();
           templateUrl='src/public/mystuff/myForm.html';
           if (Object.keys(reginfo).length > 0){
              this.self.templateUrl='src/public/mystuff/registration2.html';
           }
           
        }]

      }
    })
    */
/*
      .state('registration', {
      url: '/register',
      templateProvider: ['$stateParams', '$templateRequest','MenuService',
      function($stateParams, $templateRequest,MenuService) 
      {
        reginfo= MenuService.getRegistration();
           templateUrl='src/public/mystuff/myForm.html';
           if (Object.keys(reginfo).length > 0){
              this.self.templateUrl='src/public/mystuff/registration2.html';
           }
        return $templateRequest(tplName);
      }
      ],
      controller:'formcontroller'

    })
    */
/*
    .state('registration',{
        url:'/register',
        templateProvider: function(CONFIG, $templateRequest,MenuService) {
        console.log('in templateUrl ');

        var templateName = '/src/public/mystuff/myForm.html';

         reginfo= MenuService.getRegistration();
           
           if (Object.keys(reginfo).length > 0){
              templateName='src/public/mystuff/registration2.html';
           }

        return $templateRequest(templateName);
      },
      controller:'formcontroller'

    })
*/

/*
 .state('registration',{
    url: '/registration',
    templateUrl: function($stateParams,MenuService){
           reginfo= MenuService.getRegistration();
           aurl='src/public/mystuff/myForm.html';
           if (Object.keys(reginfo).length > 0){
              aurl='src/public/mystuff/registration2.html';
           }
         return aurl;
        },
    controller: 'formcontroller',
  })*/
    

     /*
     .state('myinfo', {
      url: '/myinfo',
      component:'myinfo'
    })
     */
      .state('myinfo', {
      url: '/myinfo',
      templateUrl:'src/public/mystuff/myinfo.html'
    })

     /*
     .state('regsuccessState', {
      url: '/registerSuccess',
      templateUrl: "src/public/registration2.html",
      controller:"regController",
      controllerAs:"regCtrl",
      resolve: {
        regItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.saveRegistration($stateParams.user);
        }]
      }
    */
   
    .state('regsuccessState', {
      url: '/registerSuccess',
      component:'regsuccess'
     
 
    })
    
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItem($stateParams.category);
        }]
      }
    });
}
})();
