angular.module(_CONTROLLERS_).controller('device', function($scope, $ionicPlatform) {
    console.log('### device controller in');
    

   	$scope.top5ProductsChart = {
        title: {
            text: 'Monthly Average Tension',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: ensemble.io',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Tension (°P/m)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Haut',
            data: [150, 150, 145, 145, 140, 140, 142, 140, 140, 135, 130, 120]
        }, {
            name: 'Haut',
            data: [140, 140, 138, 135, 133, 130, 120, 120, 120, 114, 110, 110]
        }]
	}

    console.log('### device controller out');
});
