(function () {
    'use strict';
 
    angular
        .module('advApp')
        .component('homeComponent', {
            templateUrl:  'src/app/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
})();