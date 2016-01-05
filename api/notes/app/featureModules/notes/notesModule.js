(function () {
    'use strict'

    angular.module('app.notes', ['ngRoute', 'angularMoment'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/notes', {
                    templateUrl: 'featureModules/notes/templates/notes.html',
                    controller: 'NotesListController'
                });
        }]);
})();
