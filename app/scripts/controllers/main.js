'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', [function() {
    
  	var vm = this;

    vm.pageNumber = '/01';

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
      vm.pageNumber = '/01';
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');
      vm.pageNumber = '/02';
    };

    vm.onEnterSectionThree = function() {
      console.log('onEnterSectionThree');
      vm.pageNumber = '/03';
    };

    vm.onEnterSectionFour = function() {
      console.log('onEnterSectionFour');
      vm.pageNumber = '/04';
    };

    vm.onEnterSectionFive = function() {
      console.log('onEnterSectionFive');
      vm.pageNumber = '/05';
    };

    vm.onEnterSectionSix = function() {
      console.log('onEnterSectionSix');
      vm.pageNumber = '/06';
    };

  	vm.onLoad = function() {
  		console.log('inside onLoad() from MainCtrl');
  	};

  	vm.onLoad();

  }]);
