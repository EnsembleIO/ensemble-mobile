angular.module(_CONTROLLERS_).controller('find', function($scope, $ionicLoading, $compile, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### find controller in');



    $scope.map = { center: { latitude: 47.205129, longitude: -1.576258 }, zoom: 15 };

    $scope.options = {scrollwheel: false};

    $scope.circles = [
          {
              id: 1,
              center: {
                  latitude: 47.205129,
                  longitude: -1.576258
              },
              radius: 500,
              stroke: {
                  color: '#08B21F',
                  weight: 2,
                  opacity: 1
              },
              fill: {
                  color: '#08B21F',
                  opacity: 0.1
              },
              geodesic: true, // optional: defaults to false
              draggable: true, // optional: defaults to false
              clickable: true, // optional: defaults to true
              editable: true, // optional: defaults to false
              visible: true, // optional: defaults to true
              control: {}
          }];

          $scope.marker = {
            id: 0,
            coords: {
                  latitude: 47.205429,
                  longitude: -1.579058
            },
            options: { draggable: true },
            events: {
              dragend: function (marker, eventName, args) {
                $log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $log.log(lat);
                $log.log(lon);

                $scope.marker.options = {
                  draggable: true,
                  labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                  labelAnchor: "100 0",
                  labelClass: "marker-labels"
                };
              }
            }
          };

    console.log('### find controller out');
});