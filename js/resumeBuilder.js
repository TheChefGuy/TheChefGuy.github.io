$("#mapDiv").append(googleMap);

var awesomeThoughts = "I am Joshua and I am AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name": "Fake Name",
    "role": "Web Designer",
    "contacts": {
        "mobile": "string",
        "email": "string",
        "github": "string",
        "location": "Los Angeles, Ca",
        "residence": [
            "Seoul, South Korea", "Berlin, Germany", "Beijing, China"
        ]
    },
    "welcomeMessage": "\"The day I broke up with normal, was the first day of my magical life!\"",
    "skills": [
        "UX / UI", " HTML5 / CSS3", " JS / jQuery", " Teaching"
    ],
    "biopic": "images/MG_3764-1-683x1024-500x500.jpg"
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

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedWelcomeMsg + formattedBiopic);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};
bio.display();

var work = {
    "jobs": [{
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

work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
    });
};
work.display();

var projects = {
    "projects": [{
            "title": "Remote Job Portfolio #111",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "images/ending.jpg",
                "images/IMG_0113-768x1024.jpg",
                "images/IMG_0002.JPG"
            ]
        },
        {
            "title": "Remote Job Portfolio #222",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "images/IMG_0190.jpg",
                "images/DSC00190.JPG",
                "images/IMG_1433-4-1024x768.jpg"
            ]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();

var education = {
    "schools": [{
        "name": "Art Institute",
        "location": "Los Angeles",
        "degree": "BA",
        "majors": ["Restaurant Managment", " Baking Pastry & Dessert"],
        "dates": "2007",
        "url": ["http://example.com"]
    }],
    "onlineCourses": [{
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
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
    });
};
education.display();

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