/**
* Register controller
* @namespace thinkster.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('profile.controllers')
    .controller('ProfileController', ProfileControllerFunction);

  ProfileControllerFunction.$inject = ['$scope'];

  /**
  * @namespace RegisterController
  */
  function ProfileControllerFunction($scope) {
    var vm = this;
    console.log(vm);

    // vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf thinkster.authentication.controllers.RegisterController
    */
    // function register() {
    //   Authentication.register(vm.email, vm.password, vm.username);
    // }
  }
})();