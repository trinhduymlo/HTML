// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.products = [
			{name: "product one", price: "$55.5"},
			{name: "product Two", price: "$65.00"},
			{name: "product three", price: "$113.82"},
			{name: "product 4", price: "$572.82"}

		];

	$scope.addproduct = function(){
		$scope.products.push($scope.newproduct);
		$scope.newproduct = {};
		$scope.message = "New product Added successfully";
	};
	
	$scope.selectproduct = function(product){
		console.log(product);
		$scope.clickedproduct = product;
	};

	$scope.editproduct = function(){
		$scope.message = "product Edited successfully";
	};

	$scope.deleteproduct = function(){
		$scope.products.splice($scope.products.indexOf($scope.clickedproduct));
		$scope.message = "product Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});