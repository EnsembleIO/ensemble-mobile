angular.module(_CONTROLLERS_).controller('invitation', function($scope, $state, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### mynetwork controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    
       
       $scope.refuse_onclick = function() {
            // Go to next screen
            $state.go('network');
        }


    console.log('### mynetwork controller out');
});