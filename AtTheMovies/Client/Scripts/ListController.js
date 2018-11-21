(function (app) {

    var ListController = function ($scope, movieService) {
        console.log("ListController");

        movieService.getAll().then(function onSuccess(response) {
            $scope.movies = response.data;
        });

        $scope.create = function () {
            $scope.edit = {
                movie: {
                    Title: "",
                    Runtime: 0,
                    ReleaseYear: new Date().getFullYear()
                }
            };
        };

        $scope.delete = function (movie) {
            console.log("model.delete({Id:"+movie.Id+", Title:"+movie.Title+"})");

            movieService.delete(movie).then(function onSuccess(response) {
                removeMovieById(movie.id);
            });
        };

        var removeMovieById = function (id) {
            for (var i = 0; i < $scope.movies.length; i++) {
                if ($scope.movies[i].id == id) {
                    $scope.movies.splice(i, 1);
                    break;
                }
            }
        };
    };

    //ListController.$inject = ["$scope", "$http"];

    console.log("Registering ListController");

    app.controller("ListController", ListController);

}(angular.module("atTheMovies")));