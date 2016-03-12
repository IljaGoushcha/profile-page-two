'use strict';

angular.module('profilePageTwoApp').factory('experienceDataServices', function() {
	var myExperience = [{
		'id': 0,
		'companyName': 'Altisource',
		'companyLocation': 'Boston, MA',
		'position': 'Software Engineer',
		'startDate': 'June 2015',
		'endDate': 'present'
	},
	{
		'id': 1,
		'companyName': 'Rahmani Group',
		'companyLocation': 'Boston, MA',
		'position': 'Freelance Web Developer',
		'startDate': 'January 2015',
		'endDate': 'April 2015'
	},
	{
		'id': 2,
		'companyName': 'NuPortSoft',
		'companyLocation': 'ALiso Viejo, CA',
		'position': 'Project Manager',
		'startDate': 'May 2013',
		'endDate': 'May 2014'
	},
	{
		'id': 3,
		'companyName': 'Semicoa Corp',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test/Product Engineer',
		'startDate': 'August 2009',
		'endDate': 'April 2013'
	},
	{
		'id': 4,
		'companyName': 'Microsemi Corp',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test Engineer',
		'startDate': 'August 2008',
		'endDate': 'August 2009'
	},
	{
		'id': 5,
		'companyName': 'Semicoa',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test/R&D Engineer',
		'startDate': 'June 2004',
		'endDate': 'August 2008'
	}];

	var getMyExperience = function() {
		return myExperience;
	};

	return {
		getMyExperience: getMyExperience
	};
});