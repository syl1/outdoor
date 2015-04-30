// JavaScript Document

Outdoor.controller('ListPage', function($scope,$http) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		setPageHeight();	
		$scope.infoArray = data;
		$scope.Rand1 = Math.floor(Math.random()*5)+1;
		$scope.Rand2 = Math.floor(Math.random()*5)+1;
	
	
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);
		}
	});

});


Outdoor.filter('cutString_ListPage', function () {
    return function (value, wordwise, max, tail) 
	{
        if (!value) return '';
		
        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');
    };
});

