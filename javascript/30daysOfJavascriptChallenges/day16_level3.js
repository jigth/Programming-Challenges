const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

// Parse the string to convert it to JSON
const parsed = JSON.parse(txt);

// Map the parsed object to an organized array with the structure [{ name1, info1 }, { name2, info2 }, ..., { nameM, infoM }].
// Where "M" is the number representing the last object in the array.
const mostSkilledPerson = Object.keys(parsed).map((person, index) => {
    return {
        name: Object.keys(parsed)[index],
        info: Object.values(parsed)[index],
        skillCount: Object.values(parsed)[index].skills.length
    }
})
// Now get the whole person which skills count is the GREATEST!
.reduce((mostSkilled, currPerson) => {
    return currPerson.info.skills.length > mostSkilled.info.skills.length ?
        // Return the person with the greater skill count between the 2 persons compared
        // Then reuse that value to the next iteration of the reduce function
        currPerson
        : mostSkilled 
});

// Object is clear enough, no need for fancy text here.
console.log(mostSkilledPerson);