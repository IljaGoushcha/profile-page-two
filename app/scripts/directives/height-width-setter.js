'use strict';

angular
  .module('profilePageTwoApp')
  .directive('heightWidthSetter', function($window) {
  	return {
  		restrict: 'A',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var browserHeight = 0;
        var browserWidth = 0;

  			var setStyles = function() {
  				el.style.display = 'block';
  				el.style.border = '1px solid blue';
  				el.style.height = getBrowserDimensions().height + 'px';
  				el.style.width = getBrowserDimensions().width + 'px';
  			};

  			var getBrowserDimensions = function() {
  				browserHeight = $window.innerHeight;
  				browserWidth = $window.innerWidth;
  				
  				return {
  					'height': browserHeight,
  					'width': browserWidth
  				};
  			};

  			var onLoad = function() {
  				setStyles();
  			};

  			onLoad();
  		}
  	};
  });