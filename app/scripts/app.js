'use strict';

/**
 * @ngdoc overview
 * @name dataSummonerApp
 * @description
 * # dataSummonerApp
 *
 * Main module of the application.
 */
angular
  .module('dataSummonerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'ngToast',
    'xeditable'
  ])
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

    // For any unmatched url, redirect to /portfolio
    $urlRouterProvider.otherwise('/login');

    // States
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'loginController',
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'aboutController',
    })
    .state('request', {
      url: '/request',
      templateUrl: 'views/request.html',
      controller: 'requestController',
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/admin.html',
      controller: 'adminController',
    });

    RestangularProvider.setBaseUrl('http://192.168.1.100:8001/');

    RestangularProvider.setRequestInterceptor(function(elem, operation, what) {

      if (operation === 'put') {
        elem._id = undefined;
        return elem;
      }
      return elem;
    })
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
