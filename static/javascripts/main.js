(function () {
  'use strict';

  angular
    .module('main', ['routes','profile.controllers']);

  angular
    .module('routes', ['ngRoute']);

  angular
    .module('profile.controllers',[]);

})();