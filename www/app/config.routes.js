/*
 * config.routes.js
 *
 * Defines the routes for the application.
 *
 */
 angular.module(_APP_).config(function($stateProvider, $urlRouterProvider) {

    // Define routes here.
    $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'views/search/search.html',
      controller: 'search'
    })
    .state('company', {
      url: '/company/:index/:type/:companyId',
      templateUrl: 'views/details/company.html',
      controller: 'company'
    })
    .state('order', {
        url: '/order/:index/:type/:companyId',
        templateUrl: 'views/details/order.html',
        controller: 'order'
    })
    .state('mynetwork', {
      url: '/mynetwork',
      templateUrl: 'views/details/mynetwork.html',
      controller: 'mynetwork'
    })
    .state('invitation', {
      url: '/invitation',
      templateUrl: 'views/details/invitation.html',
      controller: 'invitation'
    })    
    .state('notifications', {
      url: '/notifications',
      templateUrl: 'views/phonegap/notifications.html',
      controller: 'notifications'
    })
    .state('device', {
      url: '/device',
      templateUrl: 'views/phonegap/device.html',
      controller: 'device'
    })
    .state('call', {
      url: '/call',
      templateUrl: 'views/details/call.html',
      controller: 'call'
    });
    
    $urlRouterProvider.otherwise('/search');
  }
);
