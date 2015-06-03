angular.module(_CONTROLLERS_).controller('find', function($scope, $ionicLoading, $compile, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### find controller in');

    $scope.map = { center: { latitude: 47.205129, longitude: -1.576258 }, zoom: 18 };

    console.log('### find controller out');
});