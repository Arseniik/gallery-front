(function() {
    'use strict';
    angular
        .module('Dov.Gallery.Login', [])
        .directive('dovLoginDirective', DovLoginDirective);

    function DovLoginDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'login.directive.html',
            replace: true,
            scope: {
                login: '@',
                password: '@'
            },
            controller: DovLoginController,
            controllerAs: 'dovLoginCtrl',
            bindToController: true
        };

        return directive;
    }
})();
