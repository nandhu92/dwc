DWCAppModule.controller('jobNewController', ['$scope','jobsFactory','$cookies' ,'$location', function($scope,jobsFactory, $cookies , $location) {
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the jobs when we get back?  We can re-run index.
*/


  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    console.log("not loggged in");
    //$location.url('/staff/login')
<<<<<<< HEAD
    return $location.path('/staff/login').replace();

=======
    return $location.path('/employers/reserveworker').replace();
>>>>>>> 5f9b731b3966780aa1d35da11a872144745491fd
  }

  $scope.create = function(){
    jobsFactory.createJob($scope.job, function(){
        $location.url("/jobs");
    });
  }
  $scope.createForStaff = function(){
    jobsFactory.createJobForStaff($scope.job, function(){
        $location.url("/jobs");
    });
  }

  $scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
}]);
