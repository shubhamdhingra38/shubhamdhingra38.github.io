let info = {
    "firstName": "Shubham",
    "lastName": "Dhingra",
    "contact": "dhingra.shubham38@gmail.com",
    "location": "Delhi",
    "skills": ["Python", "JavaScript", "Java", "Django", "ReactJS", "Web Scraping",
        "Machine Learning", "Deep Learning", "Natural Language Processing", "Full Stack Web Development", "Data Structures And Algorithms"],
}

let resumeLink = "https://drive.google.com/file/d/1qLlfsaOC6vwpM5ZjZi67grcQ_oEbFBZJ/view"
let githubLink = "https://github.com/shubhamdhingra38"


let mainDirectory = [
    {    
        name: 'about.txt',
        isLink: false
    },
    {    
        name: 'script.py',
        isLink: false
    },
    {    
        name: 'projects/',
        isLink: true
    },
    {    
        name: 'something',
        isLink: false
    }, 
    {    
        name: 'contact/',
        isLink: true
    },
    {    
        name: 'resume.pdf',
        isLink: true,
        link: resumeLink
    },
    {
        name: 'github',
        isLink: true,
        link: githubLink
    }
]


let projectsDirectory = [
    {    
        name: 'QuickGrader',
        isLink: true,
        link: "https://github.com/shubhamdhingra38/Quick-Grader"
    },
    {    
        name: 'Collaborative_Code_Editing',
        isLink: true,
        link: "https://github.com/shubhamdhingra38/Live-Collaborative-Code-Editing"
    },
    {    
        name: 'QFiction',
        isLink: true,
        link: "https://github.com/shubhamdhingra38/QFiction"
    },
    {    
        name: 'Visual_Algorithms',
        isLink: true,
        link: "https://github.com/shubhamdhingra38/Visual-Algorithms"
    },
]

let contactDirectory = [
    {
        name: 'LinkedIn',
        isLink: true,
        link: "https://www.linkedin.com/in/shubham-dhingra-33372819b/"
    },
]

let aboutText = `
Name: ${info.firstName} ${info.lastName}
Contact: ${info.contact}
Location: ${info.location}
`

let scriptText = `
#How to make people mad at you

import numpy as pd
import pandas as np
def foo():
    print("bar")
`


let pythonClassBody = `
class Person:
    def __init__(self, firstName, lastName,
            age, location, skills, contact):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.location = location
        self.skills = skills
        self.__contact = contact
    
    def __str__(self):
        return f'{self.firstName} {self.lastName}'
    
    def getContactDetails(self):
        return f'Feel free to reach me out at {self.__contact}'
    
    def getLocationDetails(self):
        return f'I current reside in {location}, India'
    
    def getSkills(self):
        print("Following are my skills")
        for skill in self.skills:
            print('•', skill)

#------------------------------------
import pickle
shubham = pickle.loads('./myself.pkl')


`

