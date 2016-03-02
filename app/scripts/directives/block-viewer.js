'use strict';

angular
  .module('profilePageTwoApp')
  .directive('blockViewer', function($window) {
  	return {
  		restrict: 'E',
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        var browserHeight = 0;
        var browserWidth = 0;
        var ctr = 0;

  			var setStyles = function() {
  				el.style.display = 'block';
  				el.style.border = '1px solid blue';
          el.style.overflowY = 'scroll';
          el.style.overflowX = 'hidden';
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

        // var moveDown = function() {
        //   console.log("moveDown");
        // };

  			

        var mousewheel = function(event) {
          event.preventDefault();
          console.log(ctr);
          ctr++;
          angular.element($window).unbind('mousewheel', mousewheel);
        };

        angular.element($window).bind('mousewheel', mousewheel);

  			var onLoad = function() {
  				setStyles();
  			};

  			onLoad();
  		}
  	};
  });