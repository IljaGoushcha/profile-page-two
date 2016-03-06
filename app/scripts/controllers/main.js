'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['$window', function($window) {
    
  	var vm = this;

  	vm.onLoad = function() {
  		console.log('inside onLoad() from MainCtrl');
  	};

  	vm.onLoad();

  }]);
