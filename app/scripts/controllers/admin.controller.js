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
          $scope.requests = requests.plain();
        });
      }

      // get requests
      getRequestList();

      vm.statusKey = 'Open';
      vm.tableHeaders = adminService.getTableHeaders();

      vm.updateRequest = function(updatedRequest) {
        var request = {"request": updatedRequest}

        Restangular.one("requests", updatedRequest.id).customPUT(request).then(function() {
          getRequestList();
        });
      }

      vm.showOpen = function() {
        vm.statusKey = 'Open'
      }

      vm.showClosed = function() {
        vm.statusKey = 'Closed'
      }

      vm.openOrClosed = function(request) {
        return request.batch.status.label === vm.statusKey;
      }

      $rootScope.$on('newrequest', function(event, args){
        console.log('lol');
        getRequestList();
      });
    }

})();
