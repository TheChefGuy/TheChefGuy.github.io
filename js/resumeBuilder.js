$("#mapDiv").append(googleMap);

var awesomeThoughts = "I am Joshua and I am AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name" : "Fake Name",
    "role" : "Web Designer",
    "contacts" : {
        "mobile" : "string",
        "email" : "string" ,
        "github" : "string",
        "location" : "Los Angeles, Ca",
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

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedWelcomeMsg + formattedBiopic);
};
bio.display();

bio.skills.display = function(){
    $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill){
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
  });
};
bio.skills.display();
         
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
    education.school.forEach(function(school){

        var formattedSchool = HTMLschoolName.replace("%data%", school.name);
        $("#education").append(formattedSchool);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $("#education").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $("#education").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $("#education").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $("#education").append(formattedMajor);
    }),
    
$("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        $("#education").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $("#education").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $("#education").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
        $("#education").append(formattedonlineURL);
});
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

$("#workExperience").append(HTMLworkStart);
function displayWork() {
work.jobs.forEach(function(job){
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description); 
    $(".work-entry:last").append(formattedDescription);
});
}
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

$("#projects").append(HTMLprojectStart);
projects.display = function() {
    projects.projects.forEach(function(project){
      
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", project.date);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    }
    )};;
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
