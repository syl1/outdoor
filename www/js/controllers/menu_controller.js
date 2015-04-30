// JavaScript Document

Outdoor.controller('MenuController', function($scope,$http) 
{
    $http.get('js/json/ginun.json').success(function(data)
	{
		setBackgroundImg();
		$scope.ginun = data;
		Page_Id = 2;
	});
});