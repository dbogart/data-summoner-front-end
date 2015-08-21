(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('loginController', loginController);

    loginController.$inject = ['$scope'];

    function loginController($scope) {

      $scope.test = "lol";

    }

})();
