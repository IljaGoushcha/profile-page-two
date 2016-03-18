'use strict';

angular.module('profilePageTwoApp').factory('achievementsDataServices', function() {
	var myAchievements = [
		'Row for RBC (Riverside Boat Club) at Cambridge',
		'Participated in five triathlons, two of them olympic distance',
		'Graduated from music school, studied playing classic guidar',
		'Won UROP grant to study MEMS systems at UC Irvine',
		'Published eight papers in popular engineering/science periodicals',
		'Co-founded two startup companies, developed patent-pending technologies'
	];

	var getMyAchievements = function() {
		return myAchievements;
	};

	return {
		getMyAchievements: getMyAchievements
	};
});