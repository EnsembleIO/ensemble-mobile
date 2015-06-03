angular.module(_CONTROLLERS_).controller('agenda', function($scope, $state, $cordovaCalendar, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### calendar controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);

    $scope.createEvent = function() {
	  window.plugins.calendar.openCalendar();
    }
	   
    console.log('### calendar controller out');
});