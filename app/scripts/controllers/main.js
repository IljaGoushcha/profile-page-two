'use strict';

/**
 * @ngdoc function
 * @name profilePageTwoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilePageTwoApp
 */
angular.module('profilePageTwoApp')
  .controller('MainCtrl', ['$scope', '$window', 'experienceDataServices', 'skillsDataServices', 'achievementsDataServices', function($scope, $window, experienceDataServices, skillsDataServices, achievementsDataServices) {
    
  	var vm = this;

    vm.testData = [
      {
        value: 300,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Red'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ];

    vm.tallClass = false;
    vm.showEmploymentDescriptionClass = false;
    vm.showSkillsClass = false;
    vm.showAchievementClass = false;
    vm.showAchievementTitleClass = false;

    vm.myExperience = experienceDataServices.getMyExperience();
    vm.myAchievements = achievementsDataServices.getMyAchievements();

    vm.chartOptions = {
      segmentShowStroke : false,
      animateRotate : true,
      percentageInnerCutout : 95,
      responsive: true
    };

    vm.onEnterSectionOne = function() {
      console.log('onEnterSectionOne');
    };

    vm.onEnterSectionTwo = function() {
      console.log('onEnterSectionTwo');
      vm.changeSkillPage(1);
    };

    vm.changeSkillPage = function(myPageNumber) {
      vm.showSkillsClass = false;
      vm.pageNumber = myPageNumber;
      var startIndex = 6 * (myPageNumber - 1);
      var endIndex = 6 * myPageNumber;
      console.log('startIndex: ' + startIndex);
      console.log(skillsDataServices.getMySkills());
      vm.mySkills = [];
      console.log(vm.mySkills);
      setTimeout(function() {
        vm.showSkillsClass = true;
        vm.mySkills = skillsDataServices.getMySkills().slice(startIndex, endIndex);
        $scope.$apply();
      }, 100);
    };

    vm.onEnterSectionThree = function() {
      console.log('onEnterSectionThree');
      vm.tallClass = true;
      setTimeout(function() {
        vm.showEmploymentDescriptionClass = true;
        $scope.$apply();
      }, 800);
    };

    vm.onEnterSectionFour = function() {
      console.log('onEnterSectionFour');
      vm.testData = [
        // { value : 50, color : '#F7464A' },
        // { value : 90, color : '#E2EAE9' }
      ];
      setTimeout(function() {
        vm.testData = [
          { value : 50, color : '#F7464A' },
          { value : 90, color : '#E2EAE9' },
          { value : 75, color : '#D4CCC5' },
          { value : 30, color : '#949FB1'}
        ];
        $scope.$apply();
      }, 500);
    };

    vm.onEnterSectionFive = function() {
      console.log('onEnterSectionFive');
      vm.showAchievementClass = true;
      setTimeout(function() {
        vm.showAchievementTitleClass = true;
        $scope.$apply();
      }, 800);
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
