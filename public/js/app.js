const app = angular.module('Wrestlers_App', []);



app.controller('MainController', ['$http', function ($http) {

    this.wrestlers = [];
    this.newWrestlerForm = {};

    this.displayWrestler = function () {
        $http({
            url: '/wrestlers',
            method: 'GET'
        }).then(response => {
            this.wrestlers = response.data;
        }, error => {
            console.log(error.message);
        }).catch(err => console.log('Catch', err))
    }

    this.displayWrestler();

    this.addWrestler = function () {
      $http({
        url: '/wrestlers',
        method: 'POST',
        data: {this.newWrestlerForm}
      }).then(response => {
        this.wrestlers.push(response.data);
        this.newWrestlerForm = {};
      }, error => {
        console.log(error.message);
      }).catch(err => console.log('Catch', err))
    }


}]);
