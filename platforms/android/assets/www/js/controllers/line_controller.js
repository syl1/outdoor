// JavaScript Document
Outdoor.controller('LinePage', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		
	
		$scope.openImport = function () 
		{
			var PopUpImport = $modal.open({
			templateUrl: 'templates/popups/import_popup.html',
			controller: 'ImportPopUp'
		})};
		
		$scope.openRate = function () 
		{
			var RatePopUp = $modal.open({
			templateUrl: 'templates/popups/rate_popup.html',
			controller: 'ImportPopUp'
		})};
		
		$scope.navigateUrl = function (Path,Num) 
		{
			//angular.element('body').css('position','absolute');
			//alert("Line2")
			//setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
			//angular.element('body').scrollTop(0);
		}
		
	});
});

Outdoor.controller('ImportPopUp',function($scope, $modalInstance) 
{
	$scope.closeImportPopup = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('RatePopUp',function($scope, $modalInstance) 
{
	$scope.closeRatePopup = function () {
		$modalInstance.close();
	};
});



Outdoor.filter('InfoPopUp', function() 
{
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

