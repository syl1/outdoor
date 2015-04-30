// JavaScript Document

Outdoor.controller('MainController', function($scope,$http) 
{
    $http.get('js/json/ginun.json').success(function(data)
	{
		setBackgroundImg();
		$scope.ginun = data;
		Page_Id = 1;
	});
});
