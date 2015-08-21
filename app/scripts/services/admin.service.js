(function(){
'use strict';
    angular
      .module('dataSummonerApp')
      .factory('adminService',  adminService);

      adminService.$inject = ['$window', '$state'];

        function adminService($window, $state) {

          return {
              getRequests: getRequests,
              getTableHeaders: getTableHeaders
          };

          function getTableHeaders() {
            var tableHeaders = [
              {title: "Requester"},
              {title: "Client Company"},
              {title: "Drug"},
              {title: "Priority"},
              {title: "Request Date"},
              {title: "Batch"},
              {title: "Status"}
            ];

            return tableHeaders;
          }

          function getRequests() {

            var requests = [
              {
                requester: "test",
                client: "test",
                drug: "test",
                priority: "low",
                requested: "test",
                batch: {
                  batch_name: "test", status: { label: "open" } },
                status: "open",
              },
              {
                requester: "test2",
                client: "test2",
                drug: "test2",
                priority: "low",
                requested: "test2",
                batch: { batch_name: "test2", status: { label: "open" } },
                status: "open",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "low",
                requested: "test3",
                batch: { batch_name: "test3", status: { label: "open" } },
                status: "open",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "low",
                requested: "test3",
                batch: { batch_name: "test3", status: { label: "open" } },
                status: "closed",
              },
              {
                requester: "test3",
                client: "test3",
                drug: "test3",
                priority: "low",
                requested: "test3",
                batch: { batch_name: "test3", status: { label: "open" } },
                status: "closed",
              }
            ];

            return requests;
          }

      }
})();
