(function (app) {
    var DetailsController = function ($scope, $routeParams, movieService) {
        console.log("DetailsController");
        
        var id = $routeParams.id;

        movieService.getById(id).then(function onSuccess(response) {
            $scope.movie = response.data;            
        });

        $scope.edit = function () {
            $scope.edit.movie = angular.copy($scope.movie);
        };
    };
    console.log("Registering DetailsController");

    app.controller("DetailsController", DetailsController);
}(angular.module("atTheMovies")));