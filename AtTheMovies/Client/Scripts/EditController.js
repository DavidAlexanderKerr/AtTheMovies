(function (app) {
    var EditController = function ($scope, movieService) {

        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.movie;
        };

        $scope.cancel = function () {
            $scope.edit.movie = null;
        };

        $scope.save = function () {
            if ($scope.edit.movie.Id) {
                updateMovie();
            }
            else {
                createMovie();
            }
        };

        var updateMovie = function () {
            movieService.update($scope.edit.movie).then(function onSuccess(response) {
                angular.extend($scope.movie, $scope.edit.movie);
                $scope.edit.movie = null;
            });
        };

        var createMovie = function () {
            movieService.create($scope.edit.movie).then(function onSuccess(response) {
                $scope.movies.push(response.data);
                $scope.edit.movie = null;
            });
        };
    };

    app.controller("EditController", EditController);
}(angular.module("atTheMovies")));