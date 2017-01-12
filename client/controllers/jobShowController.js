DWCAppModule.controller('jobShowController', ['$scope','jobsFactory', '$cookies','$location', '$routeParams', function($scope, jobsFactory,$cookies, $location, routeParams) {
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    //$location.url('/staff/login')
    return $location.path('/staff/login').replace();
  }

  $scope.show = function(){
      jobsFactory.getOneJob(routeParams.id, function(data){
          $scope.job = data;
      });
  };
  $scope.show();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the jobs when we get back?  We can re-run index.
*/
$scope.logout = function(){
  $cookies.remove('logged_user');
  $location.url('/');
}

}]);
