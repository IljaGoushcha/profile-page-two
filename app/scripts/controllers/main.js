'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['experienceDataServices', function(experienceDataServices) {
    
  	var vm = this;

    vm.myExperience = experienceDataServices.getMyExperience();

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');
    };

    vm.onEnterSectionThree = function() {
      console.log('onEnterSectionThree');
    };

    vm.onEnterSectionFour = function() {
      console.log('onEnterSectionFour');
    };

    vm.onEnterSectionFive = function() {
      console.log('onEnterSectionFive');
    };

    vm.onEnterSectionSix = function() {
      console.log('onEnterSectionSix');
    };

    vm.downloadResumeAction = function() {
      console.log('download resume');
    };

  	vm.onLoad = function() {
  		console.log('inside onLoad() from MainCtrl');
  	};

  	vm.onLoad();

  }]);
