(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('adminController', adminController);

    adminController.$inject = ['$scope', '$rootScope', 'adminService', 'Restangular'];

    function adminController($scope, $rootScope, adminService, Restangular) {

      var vm = $scope;
      var requestList = Restangular.all('request');

      function getRequestList() {
        requestList.getList().then(function(requests){
          $scope.requests = requests;
          console.log(requests)
        });
      }

      // get requests
      getRequestList();

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

      $rootScope.$on('newrequest', function(event, args){
        console.log('lol');
        getRequestList();
      });
    }

})();
