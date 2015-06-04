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
    .state('network', {
      url: '/network',
      templateUrl: 'views/network/network.html',
      controller: 'network'
    })
    .state('invitation', {
      url: '/invitation',
      templateUrl: 'views/network/invitation.html',
      controller: 'invitation'
    })
    .state('research', {
      url: '/research',
      templateUrl: 'views/network/research.html',
      controller: 'research'
    })    
    .state('find', {
      url: '/find',
      templateUrl: 'views/network/find.html',
      controller: 'find'
    })    
    .state('agenda', {
      url: '/agenda',
      templateUrl: 'views/calendar/agenda.html',
      controller: 'agenda'
    })
    .state('device', {
      url: '/device',
      templateUrl: 'views/device/device.html',
      controller: 'device'
    })
    .state('activity', {
      url: '/activity',
      templateUrl: 'views/device/activity.html',
      controller: 'activity'
    })
    .state('frequence', {
      url: '/frequence',
      templateUrl: 'views/device/frequence.html',
      controller: 'frequence'
    })
    .state('call', {
      url: '/call',
      templateUrl: 'views/call/call.html',
      controller: 'call'
    });
    
    $urlRouterProvider.otherwise('/search');
  }
);
