'use strict';

angular
  .module('profilePageTwoApp')
  .directive('heightSetter', function($window) {
  	return {
  		restrict: 'A',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var browserHeight = 0;
        var adjustedHeight = 0;
        var offset = attrs.offset;
        var minHeight = attrs.minHeight;

  			var setStyles = function() {
  				el.style.display = 'block';
  				// el.style.border = '1px solid red';
          adjustedHeight = (getBrowserDimensions().height - offset);
          if (adjustedHeight >= minHeight) {
            el.style.height = adjustedHeight + 'px';
          } else {
            el.style.height = minHeight + 'px';
          }
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