$("#mapDiv").append(googleMap);

var awesomeThoughts = "I am Joshua and I amd AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name" : "Joshua Bruck",
    "role" : "Web Designer",
    "contacts" : {
        "mobile" : "string",
        "email" : "string" ,
        "github" : "string",
        "location" : "los angeles, ca",
        "residence" : [
            "Seoul, South Korea", "Berlin, Germany", "Beijing, China"
        ]
    },
    "welcomeMsg" : "\"The day I broke up with normal, was the first day of my magical life!\"",
    "skills" : [
        "UX / UI", " HTML5 / CSS3", " JS / jQuery", " Teaching"
        ],
    "biopic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedWelcomeMsg + formattedBiopic);


if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
};
         
var education = {
    "school": [
        {
        "name": "Art Institute",
        "location": "Los Angeles",
        "degree": "BA",
        "major": ["Restaurant Managment", " Baking Pastry & Dessert"],
        "dates": "2007",
        "url": ["http://example.com"]
}],
    "onlineCourses": [
    {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "http:www.udacity.com"
    },
    {
        "title": "UI Design",
        "school": "Career Foundry",
        "dates": "2017",
        "url": "http:www.careerfoundry.com"
    },
    {
        "title": "HTML5 Introduction",
        "school": "W3Cx",
        "dates": "2017",
        "url": "http:www.edx.org"
    },
    {
        "title": "CSS3 Introduction",
        "school": "W3Cx",
        "dates": "2017",
        "url": "http:www.edx.org"
    },
    {
        "title": "Introduction to HTML and JavaScript",
        "school": "Microsoft",
        "dates": "2017",
        "url": "http:www.edx.org"
    }]
};

$("#education").append(HTMLschoolStart);
education.display = function() {
    for (school in education.school) {

        var formattedSchool = HTMLschoolName.replace("%data%", education.school[school].name);
        $("#education").append(formattedSchool);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[school].degree);
        $("#education").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
        $("#education").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
        $("#education").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[school].major);
        $("#education").append(formattedMajor);
    }
    
$("#education").append(HTMLonlineClasses);
for (course in education.onlineCourses) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $("#education").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $("#education").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $("#education").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $("#education").append(formattedonlineURL);
}
};
education.display();

var work = {
    "jobs": [
        {
            "employer": "Remote Full Benefit Job #1",
            "title": "Front-end Web Designer",
            "location": "los angeles, ca",
            "dates": "Janurary 2000 - Current",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Remote Full Benefit Job #2",
            "title": "Front-end Web Designer",
            "location": "los angeles, ca",
            "dates": "Janurary 2000 - Current",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Remote Full Benefit Job #3",
            "title": "Front-end Web Designer",
            "location": "los angeles, ca",
            "dates": "Janurary 2000 - Current",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};

function displayWork() {
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 
    $(".work-entry:last").append(formattedDescription);
}
};
displayWork();

var projects = {
	"projects": [
        {
		"title": "Remote Job Portfolio #111",
		"date": "2017",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images": [
			"images/fry.jpg",
            "images/fry.jpg",
			"images/fry.jpg"
		    ]
	    },
        {
		"title": "Remote Job Portfolio #222",
		"date": "2017",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images": [
			"images/fry.jpg",
            "images/fry.jpg",
			"images/fry.jpg"
		    ]
	    }
    ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

/* function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));
*/


/*  function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+ name[1];
}; 

$("#main").append(internationalizeButton);
*/
