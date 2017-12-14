const app = angular.module('Wrestlers_App', []);



app.controller('MainController', ['$http', function ($http) {

    this.wrestlers = [];

    this.displayWrestler = function () {
        $http({
            url: '/wrestlers',
            method: 'GET'
        }).then(response => {
            this.wrestlers = response.data;
        }, error => {
            console.log(error.message);
        })
    }

    this.displayWrestler();




}]);
