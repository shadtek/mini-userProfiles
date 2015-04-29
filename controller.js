var app = angular.module('userProfiles')

app.controller('mainCtrl', function($scope, dataService) {
	$scope.getUsers = function() {
		$scope.users = dataService.getUsers()
	}

	$scope.getUsers()
});