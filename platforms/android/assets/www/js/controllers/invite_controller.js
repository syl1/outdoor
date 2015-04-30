Outdoor.controller('InviteController', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		//angular.element('body').css('position','relative');
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		
		
		$scope.navigateUrl = function (Path,Num) 
		{
			//angular.element('body').css('position','absolute');
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);
			angular.element('body').scrollTop(0);
		}
		
		//angular.element('.InvitePage').scrollTop(0);
		//angular.element('.LinePage').scrollTop(0);
		
	});
});