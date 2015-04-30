

var Outdoor = angular.module('Outdoor', ['ngRoute','ui.bootstrap','ngAnimate']);	

Outdoor.run(function() 
{
	angular.element('.Content').css('height', window.innerHeight+'px');
});



////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Main Controller  //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


Outdoor.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/List', {
        templateUrl: 'templates/list.html',
        controller: 'ListPage'
    }).
    when('/Line/:itemId', {
        templateUrl: 'templates/line.html',
        controller: 'LinePage'
    }).
	when('/Main/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
    }).
	when('/Menu/', {
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
    }).
	when('/Gallery/:itemId', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    }).
	when('/Invite/:itemId', {
        templateUrl: 'templates/invite_place.html',
        controller: 'InviteController'
    }).
	when('/PrvImages/:itemId', {
        templateUrl: 'templates/prv_images.html',
        controller: 'PrvController'
    }).
	when('/Birthday/:itemId', {
        templateUrl: 'templates/birthday.html',
        controller: 'BirthdayController'
    }).
    otherwise({
        redirectTo: '/Main'
    });
}]);



////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  DetailsController /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


Outdoor.controller('DetailsController', function($scope,$http,$routeParams) {
 	
	$http.get('js/ginun.json').success(function(data)
	{
		$scope.ginun = data;
		$scope.whichItem = $routeParams.itemId;
		
		if($routeParams.itemId > 0 )
		{
			$scope.prevItem = Number($routeParams.itemId)-1;
		}
		else
		{
			$scope.prevItem = $scope.ginun.length-1;
		}
		
		
		if($routeParams.itemId < $scope.ginun.length-1)
		{
			$scope.nextItem = Number($routeParams.itemId)+1;
		}
		else
		{
			$scope.nextItem = 0;
		}
		
		$scope.pageClass = 'page-about';
		
		chooseColor();
	});
});
