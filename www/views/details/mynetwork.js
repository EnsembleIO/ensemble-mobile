angular.module(_CONTROLLERS_).controller('mynetwork', function($scope, $state, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### mynetwork controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    
	   $scope.invitation_onclick = function() {
	        // Go to next screen
	        $state.go('invitation');
	    }
	   
	   $scope.rechercher_onclick = function() {
	        // Go to next screen
	        $state.go('search');
	    }

    console.log('### mynetwork controller out');
});