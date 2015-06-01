angular.module(_CONTROLLERS_).controller('calendar', function($scope, $state, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### calendar controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);

    console.log('### calendar controller out');
});