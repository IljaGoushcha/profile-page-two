'use strict';

angular
  .module('profilePageTwoApp')
  .directive('widthSetter', function($window) {
  	return {
  		restrict: 'A',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var browserWidth = 0;
        var adjustedWidth = 0;
        var offset = attrs.widthOffset;
        var minWidth = attrs.minWidth;

  			var setStyles = function() {
  				el.style.display = 'block';
  				// el.style.border = '1px solid red';
          adjustedWidth = (getBrowserDimensions().width - offset);
          if (adjustedWidth >= minWidth) {
            el.style.width = adjustedWidth + 'px';
          } else {
            el.style.width = minWidth + 'px';
          }
  			};

  			var getBrowserDimensions = function() {
  				browserWidth = $window.innerWidth;
  				return {
  					'width': browserWidth
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