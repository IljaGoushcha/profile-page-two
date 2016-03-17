'use strict';

angular.module('profilePageTwoApp').factory('blueTriangleServices', function() {

	var blueTrianglePath = '../images/blue-triangle.svg';

	var getBlueTrianglePath = function() {
		return blueTrianglePath;
	};

	var setBlueTrianglePath = function(myPath) {
		blueTrianglePath = myPath;
	};

	return {
		getBlueTrianglePath: getBlueTrianglePath,
		setBlueTrianglePath: setBlueTrianglePath
	};
});