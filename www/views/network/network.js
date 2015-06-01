angular.module(_CONTROLLERS_).controller('network', function($scope, $state, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### network controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    
	   $scope.invitation_onclick = function() {
	        // Go to next screen
	        $state.go('invitation');
	    }
	   
	   $scope.find_onclick = function() {
	        // Go to next screen
	        $state.go('find');
	    }

    console.log('### network controller out');
});