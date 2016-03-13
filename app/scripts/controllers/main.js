'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['$scope', '$window', 'experienceDataServices', function($scope, $window, experienceDataServices) {
    
  	var vm = this;

    vm.tallClass = false;
    vm.showEmploymentDescriptionClass = false;

    vm.myExperience = experienceDataServices.getMyExperience();

    vm.chartOptions = {
      segmentShowStroke : false,
      animateRotate : true,
      percentageInnerCutout : 90
    };

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');

      vm.myData1 = [
        { value : 5, color : "#5BB1BD" },
        { value : 5, color : "#3C3A3B" }
      ];

      vm.myData2 = [
        { value : 8, color : "#5BB1BD" },
        { value : 2, color : "#3C3A3B" }
      ];

      vm.myData3 = [
        { value : 6, color : "#5BB1BD" },
        { value : 4, color : "#3C3A3B" }
      ];

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

    vm.githubAction = function() {
      $window.open('https://github.com/IljaGoushcha');
    };

    vm.linkedinAction = function() {
      $window.open('https://www.linkedin.com/in/iljagoushcha');
    };

  	vm.onLoad();

  }]);
