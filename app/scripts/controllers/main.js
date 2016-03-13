'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['$scope', '$window', 'experienceDataServices', 'skillsDataServices', function($scope, $window, experienceDataServices, skillsDataServices) {
    
  	var vm = this;

    vm.tallClass = false;
    vm.showEmploymentDescriptionClass = false;
    vm.showSkillsClass = false;

    vm.myExperience = experienceDataServices.getMyExperience();

    vm.chartOptions = {
      segmentShowStroke : false,
      animateRotate : true,
      percentageInnerCutout : 95
    };

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');
      vm.mySkills = skillsDataServices.getMySkills();
      vm.showSkillsClass = true;
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

    vm.openExperienceModal = function(myExperience) {
      console.log('inside openExperienceModal()');
      angular.element('#experienceModal').modal();
      vm.selectedExperience = myExperience;
    };

  	vm.onLoad();

  }]);
