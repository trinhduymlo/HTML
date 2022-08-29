var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope, $http) {
    $scope.CurrentDate = new Date();
    $http.get("https://api.openweathermap.org/data/2.5/weather?lat=21.024&lon=105.8412&appid=976b822c2b74132895ebdef84b2f3e08")
        .success(function (data) {
            if (data) {

                $scope.current = data.main.temp;
                $scope.temp_min =data.main.temp_min;
                $scope.temp_max =data.main.temp_max;
                $scope.wind_speed =data.wind.speed;
                $scope.clouds = data.clouds ? data.clouds.all: undefined;
                $scope.name = data.name;


                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if($scope.clouds < 20) {

                    $scope.img_url =baseUrl + 'sunny.png';

                }else if ($scope.clouds<98){

                    $scope.img_url = baseUrl + 'partly_cloudy.png';
                }else {

                    $scope.img_url =baseUrl + 'cloudy.png';
                }
            }
        })
        .error(function (data, status) {
            console.log(data);
        })

});