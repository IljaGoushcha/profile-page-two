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

  	// angular.element($window).bind('mousewheel', function(event) {
  	// 	console.log();
  	// 	// event.originalEvent.offsetY = 0;
  	// 	var direction = 0;
  	// 	if (event.originalEvent.wheelDelta > 0) {
  	// 		direction = 1;
  	// 		// $window.pageYOffset = 50;
  	// 	} else {
  	// 		direction = -1;
  	// 		// $window.pageYOffset = 0;
  	// 	}
  	// 	console.log(direction);
  	// 	// event.preventDefault();
  	// });

    vm.swipeUpAction = function(event) {
      console.log('swipe up detected');
    };

  	vm.onLoad = function() {
  		console.log('inside onLoad() from MainCtrl');
  	};

  	vm.onLoad();

  }]);
