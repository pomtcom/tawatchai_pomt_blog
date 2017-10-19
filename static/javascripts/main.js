(function () {
	'use strict';

	angular
	.module('main', ['routes','profile.controller','config']);

	angular
	.module('routes', ['ngRoute']);

	angular
	.module('profile.controller',[]);

	angular.module('config',[]);

	// angular.module('main',[]);

	// angular.module('blogs.controller',[]);



	

})();