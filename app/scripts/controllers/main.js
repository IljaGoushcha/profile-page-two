'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['$scope', 'experienceDataServices', function($scope, experienceDataServices) {
    
  	var vm = this;

    vm.tallClass = false;
    vm.showEmploymentDescriptionClass = false;

    vm.myExperience = experienceDataServices.getMyExperience();

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');
    };

    vm.onEnterSectionThree = function() {
      console.log('onEnterSectionThree');
      vm.tallClass = true;
      setTimeout(function(){
        vm.showEmploymentDescriptionClass = true;
        $scope.$apply();
      }, 1000);
    };

    vm.onEnterSectionFour = function() {
      console.log('onEnterSectionFour');
      vm.tallClass = true;
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
