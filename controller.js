var app = angular.module('userProfiles')

app.controller('mainCtrl', function($scope, dataService) {

	$scope.users = dataService.getUsers()

});