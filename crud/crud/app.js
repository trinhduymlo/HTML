// code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope){
    console.log("My controller.....");

    $scope.users = [
        {name: "Thi", email: "dangkimthi@gmail.com", fullname: "Dang Kim Thi"},
        {name: "ThiDK", email: "thidk@gmail.com", fullname: "Thi DK"},
        {name: "CodeLean", email: "codelean@gmail.com", fullname: "Code Lean"},
    ];

    $scope.addUser =function (){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";
    };

    $scope.selectUser = function (user){
        console.log(user);
        $scope.clickedUser= user;
    };

    $scope.editUser = function (){
        $scope.message = "User Edited successfully";
    };

    $scope.deleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "User Delete successfully";
    };

    $scope.clearMessage = function (){
        $scope.message = "";
    };
});