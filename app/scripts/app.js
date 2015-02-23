'use strict';

/**
 * @ngdoc overview
 * @name pathfinderApp
 * @description
 * # pathfinderApp
 *
 * Main module of the application.
 */
angular
  .module('pathfinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/campaign', {
        templateUrl: 'views/campaign.html',
        controller: 'CampaignCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      console.log(document.location.hostname)
      /**
       * I'm banking on my friends not knowing JavaScript
       * and not reading the source for the app.
       */
      if (document.location.hostname === '127.0.0.1') {
        $routeProvider.when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl'
        });
      }
  });
