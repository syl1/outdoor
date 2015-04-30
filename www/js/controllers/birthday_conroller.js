// JavaScript Document

Outdoor.controller('BirthdayController', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
	});
});