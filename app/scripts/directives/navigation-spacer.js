'use strict';

angular
  .module('profilePageTwoApp')
  .directive('navigationSpacer', function($window) {
  	return {
  		restrict: 'E',
  		link: function(scope, elem) {
  			
        var el = elem[0];
        var browserHeight = 0;
        var spacerHeight = 0;
        var offset = 300;

  			var setStyles = function() {
  				el.style.display = 'block';
  				// el.style.border = '1px solid red';
          spacerHeight = parseInt((getBrowserDimensions().height - offset)/2);
  				el.style.height = spacerHeight + 'px';
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