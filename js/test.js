var courses = {
    "hci510" : {
        "name" : "HCI 510: Intro to HCI",
        "psyPoints" : 2,
        "csPoints" : 1,
        "healthPoints" : 0,
        "artPoints" : 1,
        "isComplete" : true
    },
    
    "hci520" : {
        "name" : "HCI 520: Something HCI",
        "psyPoints" : 1,
        "csPoints" : 2,
        "healthPoints" : 0,
        "artPoints" : 2,
        "isComplete" : true
    }
}

var crest = {
    "displayPsyCrest" : "Psych Crest Image",
    "displayCsCrest" : "CS Crest Image",
    "displayHealthCrest": "Health Crest Image",
    "displayArtCrest": "Art Crest Image"
}

var badges = {
    "coreBadge" : {
        "name" : "Core Courses Badge",
        "image" : "Here is the image",
        "displayCoreBadge" : "Display image"
    }
}

var students = {
    "carlykaras" : {
        "name" : "Carly Karas",
        totalPsyPoints : hci510.psyPoints+hci520.psyPoints,
        totalCsPoints : hci510.csPoints + hci520.csPoints,
        totalHealthPoints : hci510.healthPoints + hci520.healthPoints,
        totalArtPoints : hci510.artPoints + hci520.artPoints,
        displayCoreBadge : false,
        displayPro1Badge : true,
        displayPro2Badge : false,
        displayEleBadge : true,
        displayIntBadge : true,
        displayPubBadge : true,
        displayCreditBadge : false,
        /*
        if (psy > cs && health && art) {
            displayPsyCrest
        }
        else if (cs > psy && health && art) {
            displayCsCrest
        }
        else if (health > cs && psy && art) {
            displayHealthCrest
        }
        else if (art > cs && psy && health) {
            displayArtCrest
        }
        */
    }
}