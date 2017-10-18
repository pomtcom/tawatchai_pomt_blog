(function () {
  'use strict';

  angular
    .module('routes').config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/profile', {
      controller: 'ProfileController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/profile.html'
    }).otherwise('/');
  }
})();