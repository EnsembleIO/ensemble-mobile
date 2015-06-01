angular.module(_CONTROLLERS_).controller('find', function($scope, $ionicLoading, $compile, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### find controller in');

    initialize();

      function initialize() {
        console.log('### map in ');
        var site = new google.maps.LatLng(47.205129,-1.576258);
        var hospital = new google.maps.LatLng(47.2060633,-1.5784628);
      
        var mapOptions = {
          streetViewControl:true,
          center: site,
          zoom: 19,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: site,
          map: map,
          title: 'Margaux'
        });
        
        var hospitalRoute = new google.maps.Marker({
          position: hospital,
          map: map,
          title: 'Souhail'
        });
        
        var infowindow = new google.maps.InfoWindow({
             content:"Margaux"
        });

        infowindow.open(map,marker);
        
        var hospitalwindow = new google.maps.InfoWindow({
             content:"Souhail"
        });

        hospitalwindow.open(map,hospitalRoute);
       
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
        
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var request = {
            origin : site,
            destination : hospital,
            travelMode : google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });

        directionsDisplay.setMap(map); 
       
      }
  
      google.maps.event.addDomListener(window, 'load', initialize);
    
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });
        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
        

    console.log('### find controller out');
});