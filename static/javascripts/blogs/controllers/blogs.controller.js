(function () {
  'use strict';

  angular
  .module('main').component('blogsList',{
    templateUrl: '/static/templates/blogs.html',
    controller: function DEFGHIJ($scope, contacts) {
      // this.phones = "aaa";
      // console.log(this.phones);
      // $scope.clickedIndex = __savedClickedIndex;
      $scope.contacts = contacts.getContacts();









    }
  });











//do not change the following
})();