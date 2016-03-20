'use strict';

angular.module('profilePageTwoApp').factory('skillsDataServices', function() {
	var mySkills = [
		{
			'pageNumber': 1,
			'technologyGroups': [
				{
					'id': 0,
					'technologyGroup': 'Languages',
					'technologies': [
						{
							'name': 'JavaScript',
							'level': 8,
							'data': [
								{ value : 8, color : '#5BB1BD' },
		        				{ value : 2, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Java',
							'level': 6,
							'data': [
								{ value : 6, color : '#5BB1BD' },
		        				{ value : 4, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Ruby',
							'level': 5,
							'data': [
								{ value : 5, color : '#5BB1BD' },
		        				{ value : 5, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 1,
					'technologyGroup': 'Databases',
					'technologies': [
						{
							'name': 'PostgreSQL',
							'level': 6,
							'data': [
								{ value : 6, color : '#5BB1BD' },
		        				{ value : 4, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'MySQL',
							'level': 5,
							'data': [
								{ value : 5, color : '#5BB1BD' },
		        				{ value : 5, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'MongoDB',
							'level': 2,
							'data': [
								{ value : 2, color : '#5BB1BD' },
		        				{ value : 8, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 2,
					'technologyGroup': 'Frontend',
					'technologies': [
						{
							'name': 'AngularJS',
							'level': 9,
							'data': [
								{ value : 9, color : '#5BB1BD' },
		        				{ value : 1, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Backbone',
							'level': 4,
							'data': [
								{ value : 4, color : '#5BB1BD' },
		        				{ value : 6, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 3,
					'technologyGroup': 'Backend',
					'technologies': [
						{
							'name': 'Rails',
							'level': 7,
							'data': [
								{ value : 7, color : '#5BB1BD' },
		        				{ value : 3, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'NodeJS',
							'level': 2,
							'data': [
								{ value : 2, color : '#5BB1BD' },
		        				{ value : 8, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Play',
							'level': 4,
							'data': [
								{ value : 4, color : '#5BB1BD' },
		        				{ value : 6, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 4,
					'technologyGroup': 'Libraries',
					'technologies': [
						{
							'name': 'jQuery',
							'level': 9,
							'data': [
								{ value : 9, color : '#5BB1BD' },
		        				{ value : 1, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'd3',
							'level': 2,
							'data': [
								{ value : 2, color : '#5BB1BD' },
		        				{ value : 8, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 5,
					'technologyGroup': 'Misc',
					'technologies': [
						{
							'name': 'HTML5/CSS',
							'level': 9,
							'data': [
								{ value : 9, color : '#5BB1BD' },
		        				{ value : 1, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Bootstrap',
							'level': 9,
							'data': [
								{ value : 9, color : '#5BB1BD' },
		        				{ value : 1, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'SQL',
							'level': 7,
							'data': [
								{ value : 7, color : '#5BB1BD' },
		        				{ value : 3, color : '#3C3A3B' }
		        			]
						}
					]
				}
			]
		},
		{
			'pageNumber': 2,
			'technologyGroups': [
				{
					'id': 6,
					'technologyGroup': 'Languages',
					'technologies': [
						{
							'name': 'JavaScript',
							'level': 8,
							'data': [
								{ value : 8, color : '#5BB1BD' },
		        				{ value : 2, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Java',
							'level': 6,
							'data': [
								{ value : 6, color : '#5BB1BD' },
		        				{ value : 4, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'Ruby',
							'level': 5,
							'data': [
								{ value : 5, color : '#5BB1BD' },
		        				{ value : 5, color : '#3C3A3B' }
		        			]
						}
					]
				},
				{
					'id': 7,
					'technologyGroup': 'Databases',
					'technologies': [
						{
							'name': 'PostgreSQL',
							'level': 6,
							'data': [
								{ value : 6, color : '#5BB1BD' },
		        				{ value : 4, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'MySQL',
							'level': 5,
							'data': [
								{ value : 5, color : '#5BB1BD' },
		        				{ value : 5, color : '#3C3A3B' }
		        			]
						},
						{
							'name': 'MongoDB',
							'level': 2,
							'data': [
								{ value : 2, color : '#5BB1BD' },
		        				{ value : 8, color : '#3C3A3B' }
		        			]
						}
					]
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