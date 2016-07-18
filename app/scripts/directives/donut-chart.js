'use strict';

angular
  .module('profilePageTwoApp')
  .directive('donutChart', function() {
  	return {
  		restrict: 'E',
      scope: {
        chartTitle: '=',
        chartData: '=',
        chartOptions: '='
      },
  		link: function(scope, elem, attrs) {
  			
        var el = elem[0];
        console.log(scope);
        console.log(attrs);
        console.log('*************');
        console.log(scope.chartData);
        console.log(scope.chartOptions);
        console.log('*************');


  			var onLoad = function() {
  				console.log('loaded donut chart directive');

          el.style.display = 'block';
          el.style.position = 'absolute';
          el.style.left = '50px';
          el.style.top = '70px';
          el.style.height = '100px';
          el.style.width = '50%';
          el.style.border = '1px solid red';


  			};

  			onLoad();
  		},
      templateUrl: '../views/donut-chart-template.html'
  	};
  });