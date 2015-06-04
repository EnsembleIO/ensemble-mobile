
angular.module(_CONTROLLERS_).controller('search', function($scope, $state, oauth2Token, beeSearch, currentItem, searchSettings, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) { 
	console.log('### search controller in');

 	$scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
	console.log('url : ' + $scope.url);

	$scope.search="Margaux"

	if ($scope.search) {
		console.log("Searching:" + $scope.search);
		beeSearch.query({'search': $scope.search, 'indexes': searchSettings.getIndexes(), 'types':searchSettings.getTypes()}, function(data) {
			$scope.items = data;

			if ($scope.items.length === 0) {
				$scope.noresult = true;
			} else {
				$scope.noresult = false;
			}
		});
	} else {
		// Search string is empty
		$scope.items = null;
	}

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();

	// Search action : call elasticsearch service
	$scope.submit = function() {
		// Prevent from searching an empty string
		console.log("submit !");
		if ($scope.search) {
			console.log("Searching:" + $scope.search);
			var message = createMessageFromInput($scope.search);
			$scope.items.push(message);
		} else {
			// Search string is empty
			$scope.items = null;
		}
	}



	$scope.item_onclick = function(item) {
		// Store the current line to use it in the next screen
		currentItem.set(item);
		// Go to next screen
		$state.go('company', { 'companyId': item._source.id, 'index': item._index, 'type': item._type });
	}


	$scope.functionThatReturnsStyle = function(item) {
 		
 		if (item) {
	 		if (item._source.object.objectType == 'medical' || 
	 			item._source.object.objectType == 'prescription') {
	 			return "border-style:solid;border-color:#E10000;border-width:2px;background-color:#FFEEEE;height:120px;margin:-5px -5px -5px -5px"
	 		} else if (item._source.object.objectType == 'rendezvous') {
	 			return "background-color:#B3CFF9;height:120px;margin:-5px -5px -5px -5px"
	 		} else {
	 			return "background-color:#ECF1F6;height:120px;margin:-5px -5px -5px -5px"
	 		}
	 	}
	}

	$scope.createMessageFromInput = function(input) {
		var messsage = {
			"_index": "hackathon",
			"_type": "news",
			"_id": "AU2Mxe1Rf4cn5mrPOST1",
			"_score": 0.9459328,
			"_source": {
				"newsid": "999",
				"published": "2015-06-04T12:45:00.000Z",
				"actor": {
					"id": "urn:ensemble:member:jean",
					"objectType": "member",
					"displayName": "Jean"
				},
				"verb": "post",
				"object": {
					"id": "urn:ensemble:news:999",
					"objectType": "message",
					"displayName": input
				},
				"target": {
					"id": "urn:ensemble:member:margaux",
					"objectType": "member",
					"displayName": "Margaux"
				}
			}
		};
		return message;
	};

	console.log('### search controller out');
});
