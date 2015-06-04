angular.module(_CONTROLLERS_).controller('research', function($scope, $state, beeSearch, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
    console.log('### research controller in');

    $scope.url= BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT;
    console.log('url : ' + $scope.url);
    

	// Search action : call elasticsearch service
	$scope.search_onchange = function() {
		// Prevent from searching an empty string
		if ($scope.search) {
			console.log("Searching:" + $scope.search);
			//beeSearch.query({'search': $scope.search, 'indexes': searchSettings.getIndexes(), 'types':searchSettings.getTypes()}, function(data) {
				$scope.items = datafile;
				// if ($scope.items.length === 0) {
				// 	$scope.noresult = true;
				// } else {
				// 	$scope.noresult = false;
				// }
		} else {
			// Search string is empty
			$scope.items = null;
		}
	};

	var datafile = [
  {
    "numAM" : "014006829",
    "type": "cardio",
    "nom": "RUTHY",
    "prenom": "JEAN FRANCOIS",
    "adresse": "7 RUE JOSEPH BERTHOLA 01200 BELLEGARDE SUR VALSERINE",
  "telephone": "0450560914"
  },
  {
    "id" : "531004703",
    "type": "medecin",
    "nom": "DOUETTE",
    "prenom": "ROLAND",
    "adresse": "CABINET MEDICAL 9 RUE DE LA VALLEE 53500 ERNEE", 
  "telephone": "0243052013"
   },
  {
    "id" : "441011877",
    "type": "infirmier",
    "nom": "DESERRES",
    "prenom": "Catherine",
    "adresse": "38, place Maurice-Charretier 44001 NANTES", 
  "telephone": "0243052013" 
   },
  {
    "id" : "011013505",
    "type": "pharmacien",
    "nom": "Pharmacie DURAND",
    "prenom": "JEAN",
    "adresse": "11 RUE NOTRE DAME 01000 BOURG EN BRESSE", 
  "telephone": "0474236838"
   },
   {
    "id" : "441011878",
    "type": "prescription",
    "nom": "Laboratoire VERNEY",
    "prenom": "",
    "adresse": "90, Avenue Millies Lacroix 44000 NANTES", 
  "telephone": "0422236838"
   },
      {
    "id" : "011802725",
    "type": "ambulance",
    "nom": "Ambulance CONVERT",
    "prenom": "",
    "adresse": "AVENUE DE JASSERON - BP 132 44000 NANTES", 
  "telephone": "0422236838"
   },
   {
    "id" : "010007821",
    "type": "hopital",
    "nom": "CENTRE DE SANTE ETABLISSEMENT FRANCAIS DU SANG",
    "prenom": "ETAB. FRANCAIS DU SANG",
    "adresse": "900, ROUTE DE PARIS - 01012 BOURG EN BRESSE CEDEX", 
  "telephone": "0422236838"
   },
  {
    "id" : "010000024",
    "type": "hopital",
    "nom": "CENTRE HOSPITALIER FLEYRIAT BOURG EN BRESSE",
    "prenom": "CHU",
    "adresse": "900, ROUTE DE PARIS - 01012 BOURG EN BRESSE CEDEX", 
  "telephone": "0422236838"
   }, 
  {
    "id" : "010000131",
    "type": "pharmacien",
    "nom": "PHARMACIE DE THOISSEY",
    "prenom": "",
    "adresse": "11 RUE DE L HOPITAL - 01140 BOURG EN BRESSE", 
  "telephone": "0422236838"
   },
   {
    "id" : "010000001",
    "type": "member",
    "nom": "VEILLEUX",
    "prenom": "Eric",
    "adresse": "54, rue du Président Roosevelt 01140 BOURG EN BRESSE", 
  "telephone": "0160115824"
   },
   {
    "id" : "010000002",
    "type": "member",
    "nom": "CARON",
    "prenom": "Clemence",
    "adresse": "55, Rue de Verdun 71300 MONTCEAU-LES-MINES ", 
  "telephone": "0670118921"
   }
];

    console.log('### research controller out');
});