angular.module(_CONTROLLERS_).controller('call', function($scope, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### call controller in');

 	$scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
	console.log('url : ' + $scope.url);
    
    console.log('### call controller out');
});