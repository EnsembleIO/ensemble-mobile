angular.module(_CONTROLLERS_).controller('invitation', function($scope, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### mynetwork controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    

   $scope.invitation_onclick = function(item) {
        // Store the current line to use it in the next screen
        currentItem.set(item);
        // Go to next screen
        $state.go('invitation');
    }

   $scope.rechercher_onclick = function(item) {
        // Store the current line to use it in the next screen
        currentItem.set(item);
        // Go to next screen
        $state.go('find');
    }


    console.log('### mynetwork controller out');
});