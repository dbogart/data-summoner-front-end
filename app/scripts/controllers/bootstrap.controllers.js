(function(){

  'use strict';

  angular
    .module('dataSummonerApp')
    .controller('modalController', function ($scope, $modal, $log) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'modalInstanceController',
        size: size,
        scope: $scope
      });

    };

  });

  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  angular
    .module('dataSummonerApp')
    .controller('modalInstanceController', function ($scope, $modalInstance, $window, $rootScope, Restangular) {
    // Restangular.setDefaultHeaders({ 'Content-Type': 'application/json' });

    var vm = $scope;
    vm.newRequest = {
        request_date: "",
        client: "",
        drug: {
          aedrug_id: null,
          drug_notes: ""
        },
        batch: {
          batch_name: "",
          status: {
            label: "",
            modified: ""
          }
        }
      };

    vm.status = {
      isopen: false
    };

    vm.selectState = function(state) {
      vm.newTooltip.tooltip.state_name = state;
    };

    vm.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    vm.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.status.isopen = !vm.status.isopen;
    };

    vm.ok = function () {
      console.log($scope.newRequest);

      Restangular.all('request').post($scope.newRequest).then(function(data){
        $rootScope.$broadCast('newrequest');
      })
      $modalInstance.close();
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

})();

