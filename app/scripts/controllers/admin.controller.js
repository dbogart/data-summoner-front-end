(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('adminController', adminController);

    adminController.$inject = ['$scope', 'adminService', 'Restangular'];

    function adminController($scope, adminService, Restangular) {

      var vm = $scope;
      var requestList = Restangular.all('request');

      function getRequestList() {
        requestList.getList().then(function(){
          $scope.requests = requests;
        });
      }

      vm.statusKey = 'open';
      vm.tableHeaders = adminService.getTableHeaders();
      vm.requests = adminService.getRequests();

      vm.updateRequest = function(updatedRequest) {
        var request = {"request": updatedRequest}

        Restangular.one("requests", updatedRequest.id).customPUT(request).then(function() {
          getRequestList();
        });
      }

      vm.showOpen = function() {
        vm.statusKey = 'open'
      }

      vm.showClosed = function() {
        vm.statusKey = 'closed'
      }
    }

})();
