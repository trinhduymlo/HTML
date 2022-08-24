var app=angular.module('myApp', []);
app.controller('firstControllerObj', function ($scope){
    //Initialize the model object
    $scope.firstModelObj={
        firstName: "Chris"
    };
});
app.controller('secondControllerObj', function ($scope){
    //Initialize the model object
    $scope.secondModelObj={
        lastName: "Hemsworth"
    };
    //Define utility functions
    $scope.getFullName=function () {
        return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
    };
});
app.controller('thirdControllerObj', function ($scope){
    //Initialize the model object
    $scope.thirdModelObj = {
        middleName: "Whitelaw",
        lastName: "pine"
    };
    //Define utility functions
    $scope.getFullName = function () {
        return.$scope.firstModelObj.firstName + " " +
            $scope.thirdModelObj.middleName + " " +
            $scope.thirdModelObj.lastName;
    };
});