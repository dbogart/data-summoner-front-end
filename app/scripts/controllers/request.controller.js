(function (){

'use strict';

  angular
    .module('dataSummonerApp')
    .controller('requestController', requestController);

    requestController.$inject = ['$scope', 'ngToast'];

    function requestController($scope, ngToast) {

      var vm = $scope;
      vm.newRequest = { request: { drug: "", client: ""} };

      vm.submit = function () {
        // Restangular.all('requests').post(vm.newRequest).then(function(data){
        //   $rootScope.$broadcast('newrequest');
        // });
        console.log('posted', vm.newRequest);
        ngToast.create({
          className: 'success',
          content: '<span class="">Request submitted politely</span>'
        });
        vm.newRequest = { request: { drug: "", client: ""} };
      };

    }

})();
