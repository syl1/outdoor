// JavaScript Document
Outdoor.controller('Days', function($scope,$http) 
{
    $http.get('js/json/days.json').success(function(data)
	{
		$scope.daysArray = data;
		angular.element('.Content').css('height', window.innerHeight+'px');
	});
});
