'use strict';

angular.module('profilePageTwoApp').factory('experienceDataServices', function() {
	var myExperience = [{
		'id': 0,
		'companyName': 'Altisource',
		'companyLocation': 'Boston, MA',
		'position': 'Software Engineer',
		'startDate': 'June 2015',
		'endDate': 'present',
		'description': [
			"Built data visualization platform, intended for marketing behavior analysis (Pointillist App)",
			"Used AgularJS for frontend, visualization libraries, wrote backend services in Play",
			"Used WebSockets for realtime data representation",
			"Involved in data anlysis, database design, and authentication design",
			"AngularJS, JavaScript, Java, Play Framework, Nginx, WebSocket, Bamboo, MySQL, Grunt, d3, SVG, WSO2, Realtime"
		]
	},
	{
		'id': 1,
		'companyName': 'Rahmani Group',
		'companyLocation': 'Boston, MA',
		'position': 'Freelance Web Developer',
		'startDate': 'January 2015',
		'endDate': 'April 2015',
		'description': [
			"Built corporate website",
			"Developed software specifications, design, UX/UI, code",
			"JavaScript, jQuery, Photoshop, HTML5/CSS3, Bootstrap"
		]
	},
	{
		'id': 2,
		'companyName': 'NuPortSoft',
		'companyLocation': 'ALiso Viejo, CA',
		'position': 'Project Manager',
		'startDate': 'May 2013',
		'endDate': 'May 2014',
		'description': [
			"Supervised customer engagement, teams augmentation, and projects delivery timeline",
			"Completed four large scale software development projects, leading international teams of up to 10 people",
			"Applied Agile methodologies, developed software specifications"
		]
	},
	{
		'id': 3,
		'companyName': 'Semicoa Corp',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test/Product Engineer',
		'startDate': 'August 2009',
		'endDate': 'April 2013',
		'description': [
			"Developed high reliability descrete semiconductor devices for aerospace/defense industry",
			"Supervised test engineering teams of up to five people",
			"Quadrupled production output by installing and automating new test equipment",
			"Put in production close to twenty new semiconductor devices"
		]
	},
	{
		'id': 4,
		'companyName': 'Microsemi Corp',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test Engineer',
		'startDate': 'August 2008',
		'endDate': 'August 2009',
		'description': [
			"built something something",
			"assisted with something something",
			"something else"
		]
	},
	{
		'id': 5,
		'companyName': 'Semicoa',
		'companyLocation': 'Costa Mesa, CA',
		'position': 'Test/R&D Engineer',
		'startDate': 'June 2004',
		'endDate': 'August 2008',
		'description': [
			"built something something",
			"assisted with something something",
			"something else"
		]
	}];

	var getMyExperience = function() {
		return myExperience;
	};

	return {
		getMyExperience: getMyExperience
	};
});