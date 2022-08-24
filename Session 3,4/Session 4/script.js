var app=angular.module('myApp', []);
app.controller('firstControllerScope', function($scope){
    // initialize the model variables
    $scope.firstName="Chris";
});
app.controller('secondControllerScope', function($scope){
    //initialize the model variables
    $scope.lastName="Hemsworth";
    //define utility functions
    $scope.getFullName=function ()
    {
        return $scope.firstName + "" + $scope.lastName;
    };
});
app.controller('thirdControllerScope', function($scope){
    //intialize the model variables
    $scope.middleName="Whitelaw";
    $scope.lastName="Pine";
    //define utility functions
    $scope.getFullName=function (){
        return $scope.firstName + "" +$scope.middleName + "" + $scope.lastName;
    };
});