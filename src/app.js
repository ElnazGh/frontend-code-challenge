(function() {
    'use strict';

    // Creating our angular app and inject ui-router 
    // =============================================================================
    var app = angular.module('advApp', ['ui.router']); 

    // Configuring our states 
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) { 

            // For any unmatched url, redirect to src/home
            $urlRouterProvider.otherwise('src/app/home');
    
            $stateProvider

                .state('home', {
                    url: '/src/app/home',
                    component: 'homeComponent'
                })
        }

    ]);
       
})();