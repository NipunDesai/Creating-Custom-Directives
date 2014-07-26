(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['$scope','common', admin]);

    function admin($scope, common) {
        var _this = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        $scope.emailvalid = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

        $scope.users = [
        {
            name:'nipun',address:'vadodara',emailid:'nipun@promactinfo.com'
        },
        {
            name: 'rushi', address: 'vadodara', emailid: 'rushi@promactinfo.com'
        },
            {
                name: 'riya', address: 'vadodara', emailid: 'riya@promactinfo.com'
            }
        ];

        $scope.save = function() {

            $scope.users.push($scope.newuser);
            $scope.newuser = {};
        };


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Admin View'); });
        }
    }
})();