'use strict';

angular.module('profilePageTwoApp').factory('achievementsDataServices', function() {
	var myAchievements = [
		'Row for RBC (Riverside Boat Club) at Cambridge',
		'Participated in five triathlons, two of them olympic distance',
		'Graduated from music school, studied playing classic guidar'
	];

	var getMyAchievements = function() {
		return myAchievements;
	};

	return {
		getMyAchievements: getMyAchievements
	};
});