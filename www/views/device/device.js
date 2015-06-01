angular.module(_CONTROLLERS_).controller('device', function($scope, $state, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### device controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    
	   $scope.activity_onclick = function() {
	        // Go to next screen
	        $state.go('activity');
	    }
	   
	   $scope.frequence_onclick = function() {
	        // Go to next screen
	        $state.go('frequence');
	    }

    console.log('### device controller out');
});