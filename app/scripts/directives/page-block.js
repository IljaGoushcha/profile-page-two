'use strict';

angular
  .module('profilePageTwoApp')
  .directive('pageBlock', function($window) {
  	return {
  		restrict: 'E',
  		link: function(scope, elem, attrs) {
  			var el = elem[0];
  			
  			var onLoad = function() {
  				setStyles();
  			};

  			var setStyles = function() {
  				el.style.display = 'block';
  				el.style.border = '1px solid red';
  				el.style.height = getBrowserDimensions().height + 'px';
  				el.style.width = getBrowserDimensions().width + 'px';
  			};

  			var getBrowserDimensions = function() {
  				var browserHeight = $window.innerHeight;
  				var browserWidth = $window.innerWidth;
  				
  				return {
  					'height': browserHeight,
  					'width': browserWidth
  				};
  			};

  			angular.element($window).bind('resize', function() {
  				setStyles();
  			});

  			onLoad();
  		}
  	};
  });