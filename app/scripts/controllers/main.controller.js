(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('mainController', mainController);

    mainController.$inject = ['$scope'];

    function mainController($scope) {

      $scope.test = "lol";

    }

})();
