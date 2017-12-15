const app = angular.module('Wrestlers_App', []);

app.controller('MainController', ['$http', function ($http) {

    this.wrestlers = [];
    this.newWrestlerForm = {};
    this.isSelected = false;
    this.updateWrestlerForm = {};

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

    this.addNewWrestler = function () {
        $http({
            url: '/wrestlers',
            method: 'POST',
            data: this.newWrestlerForm
        }).then(response => {
            this.wrestlers.push(response.data);
            this.newWrestlerForm = {};
        }, error => {
            console.log(error.message);
        }).catch(err => console.log('Catch', err))
    }

    this.updateWrestler = function () {
        $http({
            url: '/wrestlers/' + this.updateWrestlerForm._id,
            method: 'PUT',
            data: this.updateWrestlerForm
        }).then(response => {
            this.updateWrestlerForm = {};
            this.isSelected = false;
        }, error => {
            console.log(this.updateWrestlerForm);
            console.log(error.message);
        }).catch(err => console.log('Catch', err))
    }

    this.deleteWrestler = function (id) {
        $http({
            url: '/wrestlers/' + id,
            method: 'DELETE',
        }).then(response => {
            this.updateWrestlerForm = {};
            this.isSelected = false;
            this.displayWrestler();
        }, error => {
            console.log(this.updateWrestlerForm);
            console.log(error.message);
        }).catch(err => console.log('Catch', err))
    }

    this.selectWrestler = function (thisWrestler) {
        this.isSelected = true;
        this.updateWrestlerForm = thisWrestler;
    }

}]);
