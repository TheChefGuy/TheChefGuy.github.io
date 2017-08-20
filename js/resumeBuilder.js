var awesomeThoughts = "I am Joshua and I am AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name": "Joshua Bruck",
    "role": "Web Designer",
    "contacts": {
        "mobile": "(310) 683-8953",
        "email": "JoshuaSBruck@gmail.com",
        "github": "TheChefGuy",
        "location": "Los Angeles, Ca",
        "residence": [
            "boulder, colorado", "new york city, new york"
        ]
    },
    "welcomeMessage": "\"The day I broke up with normal, was the first day of my magical life!\"",
    "skills": [
        "UX / UI", " HTML5 / CSS3", " JS / jQuery", " GitHub / GruntJS" , "Photoshop / Sketch"
    ],
    "biopic": "build/img/biopic-800.jpg"
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

var work = {
    "jobs": [{
            "employer": "College of the Canyons",
            "title": "Adjunct Instructor",
            "location": "los angeles, ca",
            "dates": "Sept 2012 - Dec 2017",
            "description": "Plan, organize and implement an appropriate instructional program in a learning environment that guides and encourages students to develop and fulfill their academic potential. Independently developed multiple lesson plans for a variety of courses and delivered strong presentations with clear communication skills."
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

var projects = {
    "projects": [{
            "title": "User Personas Research - Campin\'",
            "dates": "2017",
            "description": "Career Foundry provided instruction for the UX process. I followed the guidelines to create diagrams featuring my unique style and approach.",
            "images": [
                "build/img/Michelle-800.jpg",
                "build/img/Joe-800.jpg",
                "build/img/Laura-800.jpg"
            ],
            "wireframe": ["build/img/Wireframes-800.jpg"]
        },
        {
            "title": "Portfolio Website/App Designs",
            "dates": "2017",
            "description": "This is a collection of some of my most recent designs. These samples are coursework from the Career Foundry Program. I can share .pdf files that contain low/high fidelity wireframes and completed designs upon request.",
            "images": [
                "build/img/Campin-coverpic-800.jpg",
                "build/img/HH-coverpic-800.jpg",
                "build/img/Clozet-coverpic-800.jpg",
                "build/img/Campin-webpic-800.png",
                "build/img/DM-webpic-800.png"
            ],
            "wireframe": ""
        },
        {
            "title": "Object-Oriented Programing",
            "dates": "2017",
            "description": "These programs were done as part of the Udacity Program. The files are located on my GitHub.",
            "images": [
                "build/img/seirpinski_triangle-800.png",
                "build/img/flower_power-800.png",
                "build/img/entertainment-800.png"
            ],
            "wireframe": ""
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            })
        };
        if (project.wireframe.length > 0) {
            project.wireframe.forEach(function(frame) {
                var formattedWireframe = HTMLprojectWireframe.replace("%data%", frame);
                $(".project-entry:last").append(formattedWireframe);
            })
        };
    });
};

var education = {
    "schools": [{
        "name": "Art Institute",
        "location": "Los Angeles, Ca",
        "degree": "BS",
        "majors": ["Restaurant Management and", " Baking, Pastry & Desserts"],
        "dates": "2007",
        "url": ["https://www.artinstitutes.edu/los-angeles"]
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

        var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
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

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+ name[1];
} 

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();