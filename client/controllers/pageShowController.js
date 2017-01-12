DWCAppModule.controller('pageShowController', ['$scope','pagesFactory', '$cookies','$location', '$routeParams', function($scope, pagesFactory, $cookies ,$location, routeParams) {

  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  /*if(!logged_in_user){
  //  $location.url('/staff/login')
  return $location.path('/staff/login').replace();
}*/

  $scope.show = function(){
    pagesFactory.getOnePage(routeParams.id, function(data){
      $scope.page = data;
    });
  };
  $scope.show();
  $scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the pages when we get back?  We can re-run index.
*/

}]);
