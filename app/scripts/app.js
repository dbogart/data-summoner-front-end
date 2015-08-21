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
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /portfolio
    $urlRouterProvider.otherwise('/main');

    // States
    $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'mainController',
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
  });
