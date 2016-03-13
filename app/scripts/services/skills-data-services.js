'use strict';

angular.module('profilePageTwoApp').factory('skillsDataServices', function() {
	var mySkills = [
		{
			'id': 0,
			'technologyGroup': 'languages',
			'technologies': [
				{
					'name': 'JavaScript',
					'level': 7
				},
				{
					'name': 'Java',
					'level': 5
				},
				{
					'name': 'Ruby',
					'level': 6
				}
			]
		}
	];

	var getMySkills = function() {
		return mySkills;
	};

	return {
		getMySkills: getMySkills
	};
});