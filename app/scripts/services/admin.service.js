(function(){
'use strict';
    angular
      .module('dataSummonerApp')
      .factory('adminService',  adminService);

      adminService.$inject = ['$window', '$state'];

        function adminService($window, $state) {

          return {
              getRequests: getRequests,
          };

          function getRequests() {
            var requests = [
              {
                requester: "test",
                client: "test",
                drug: "test",
                priority: "test",
                requested: "test",
                batch: "test",
                status: "open",
              },
              {
                requester: "test2",
                client: "test2",
                drug: "test2",
                priority: "test2",
                requested: "test2",
                batch: "test2",
                status: "open",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "test3",
                requested: "test3",
                batch: "test3",
                status: "open",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "test3",
                requested: "test3",
                batch: "test3",
                status: "closed",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "test3",
                requested: "test3",
                batch: "test3",
                status: "closed",
              }
            ];

            return requests;
          }

      }
})();
