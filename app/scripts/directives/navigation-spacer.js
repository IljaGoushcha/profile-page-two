'use strict';

angular
  .module('profilePageTwoApp')
  .directive('navigationSpacer', function($window) {
  	return {
  		restrict: 'E',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var browserHeight = 0;
        var browserWidth = 0;

  			var setStyles = function() {
  				el.style.display = 'block';
  				el.style.border = '1px solid blue';
  				el.style.height = getBrowserDimensions().height + 'px';
          el.style.width = '100%';
  			};

  			var getBrowserDimensions = function() {
  				browserHeight = $window.innerHeight;
  				
  				return {
  					'height': browserHeight
  				};
  			};

        angular.element($window).bind('resize', function() {
          setStyles();
        });

  			var onLoad = function() {
  				setStyles();
  			};

  			onLoad();
  		}
  	};
  });