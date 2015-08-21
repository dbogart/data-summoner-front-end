(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('requestController', requestController);

    requestController.$inject = ['$scope'];

    function requestController($scope) {

      $scope.test = "lol";

    }

})();
