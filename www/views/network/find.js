angular.module(_CONTROLLERS_).controller('find', function($scope, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### find controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    

   $scope.invitation_onclick = function(item) {
        // Store the current line to use it in the next screen
        currentItem.set(item);
        // Go to next screen
        $state.go('call');
    }

   $scope.rechercher_onclick = function(item) {
        // Store the current line to use it in the next screen
        currentItem.set(item);
        // Go to next screen
        $state.go('call');
    }


    console.log('### find controller out');
});