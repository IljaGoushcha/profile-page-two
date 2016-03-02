'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('BlockTwoCtrl', [function() {
    
  	var vm = this;

    vm.enterFn = function() {
      console.log('inside enterFn()');
    };

  	vm.onLoad = function() {
  		console.log('inside onLoad() from BlockTwoCtrl');
  	};

  	vm.onLoad();

  }]);