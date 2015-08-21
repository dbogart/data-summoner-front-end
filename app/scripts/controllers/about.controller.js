(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('aboutController', aboutController);

    aboutController.$inject = ['$scope'];

    function aboutController($scope) {

      $scope.test = "lol";

    }

})();
