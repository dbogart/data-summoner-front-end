(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('adminController', adminController);

    adminController.$inject = ['$scope', 'adminService'];

    function adminController($scope, adminService) {

      var vm = $scope;
      vm.statusKey = 'open';

      vm.tableHeaders = [
        {title: "Requester"},
        {title: "Client Company"},
        {title: "Drug"},
        {title: "Priority"},
        {title: "Request Date"},
        {title: "Batch"},
        {title: "Status"}
      ];

      vm.requests = adminService.getRequests();

      vm.showOpen = function() {
        vm.statusKey = 'open'
        console.log('open');
      }

      vm.showClosed = function() {
        vm.statusKey = 'closed'
      }
    }

})();
