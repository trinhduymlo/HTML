// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.users = [
			{name: "Trịnh Trường Duy", email: "duytt@vnpt.vn", FullName: "0915318585"},
			{name: "Bạch Hoàng Giang", email: "giangbach@vnpt.vn", FullName: "091234567"},
			{name: "Nguyễn Trọng Cường", email: "Cuongnt@vnpt.vn", FullName: "091532874"}
		];

	$scope.addUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added successfully";
	};
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.editUser = function(){
		$scope.message = "User Edited successfully";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser));
		$scope.message = "User Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});