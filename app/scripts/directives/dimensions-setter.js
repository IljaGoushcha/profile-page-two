'use strict';

angular
  .module('profilePageTwoApp')
  .directive('dimensionsSetter', function($window) {
  	return {
  		restrict: 'A',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var aspectRatio = attrs.aspectRatio;
        console.log('aspect ratio: ' + aspectRatio);

  			var setStyles = function() {
  				el.style.display = 'block';
  				el.style.border = '1px solid blue';
  				el.style.height = getBrowserDimensions().height + 'px';
  				el.style.width = parseInt(getBrowserDimensions().height*aspectRatio) + 'px';
          el.style.marginLeft = parseInt((getBrowserDimensions().width - parseInt(getBrowserDimensions().height*aspectRatio))/2) + 'px';
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

  			var onLoad = function() {
  				setStyles();
  			};

  			onLoad();
  		}
  	};
  });