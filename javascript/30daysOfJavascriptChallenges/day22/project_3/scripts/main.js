// Main object: asabenehChallenges2020
const { description, challengeTitle, challengeSubtitle, challengeYear,
        keywords, author, challenges, } = asabenehChallenges2020;

// General styles for the body
const body = document.querySelector('body');
body.style.width = '60%';
body.style.margin = '0 auto';
body.style.textAlign = 'center';

// Updates page title with javascript        
document.querySelector('title').textContent = challengeTitle;

const wrapper = document.querySelector('.wrapper');

// Array of html for dom elements that will be rendered.  TODO: Collect Dom elements in order and render them using this array
const domElementsToRender = [];


// ******************************** TOP INFO ********************************** //
// Creating basic structure and info.
const yearTitle = document.createElement('h1');
yearTitle.innerHTML = `${description} in <span id="title-year">${challengeYear}</span>`;
wrapper.appendChild(yearTitle);
document.querySelector('#title-year').style.fontSize = '6rem';

const subtitle = document.createElement('h2');
subtitle.textContent = challengeSubtitle;
subtitle.style.textDecoration = 'underline';
wrapper.appendChild(subtitle);

const fullDate = document.createElement('p');
fullDate.setAttribute('id', 'fulldate');  // Id is used to target this element from 'addMagic.js'
fullDate.style.width = '27%';
fullDate.style.margin = '0.7rem auto';
wrapper.appendChild(fullDate);


// ******************************** CHALLENGES INFO ********************************** //

// Read Challenges from challenges_info.js and create as much elements as challenges are there!
const challengesContainer = document.createElement('ul');
const challengesList = challenges.forEach(challenge => {
    // Create the list item and get the challenge name
    const listItem = document.createElement('li');
    const challengeName = challenge.name;
    
    // Create the details element and append it to the current list item.
    const skillsTitle = challengeName.substring("30 Days Of ".length, challengeName.length);
    const skillsTitleDom = document.createElement('summary');
    skillsTitleDom.textContent = skillsTitle;
    const skillsDetails = document.createElement('details');
    const skillsList = challenge.topics.map(skill => {
        return `<div>${skill}</div>`
    }).join('');
    skillsDetails.innerHTML = skillsList;
    skillsDetails.appendChild(skillsTitleDom);

    // Create status dom element;
    const statusChallenge = challenge.status;
    const statusDom = document.createElement('span');
    statusDom.textContent = statusChallenge;

    // Append info.
    listItem.textContent = challenge.name;
    listItem.setAttribute('class', statusChallenge.toLocaleLowerCase());
    listItem.appendChild(skillsDetails);
    listItem.appendChild(statusDom);

    // style list Items one by one.
    listItem.style.display = 'flex';
    listItem.style.justifyContent = 'space-between';
    listItem.style.padding = '1.2rem';
    listItem.style.margin = '0.2rem'
    
    // Style for 'details' element of each list item
    const detailsElement = listItem.childNodes[1];
    detailsElement.style.margin = '0 0'

    // Append list item to the UL element
    challengesContainer.appendChild(listItem);

    return listItem;
});

// Style the challenges container
challengesContainer.style.width = '80%';
challengesContainer.style.margin = '0 auto';
challengesContainer.style.width = '90%';
challengesContainer.style.textAlign ='left';

wrapper.appendChild(challengesContainer);


// ******************************** AUTHOR INFO ********************************** //

const authorFullName = document.createElement('h2');
authorFullName.textContent = `${author.firstName} ${author.lastName}`;
authorFullName.style.marginBottom = '0.2rem'

const socialLinksContainer = document.createElement('div');
socialLinksContainer.setAttribute('id', 'socialLinksContainer');
socialLinksContainer.style.height = '2rem';
socialLinksContainer.style.display = 'flex';
socialLinksContainer.style.alignItems = 'center';
socialLinksContainer.style.justifyContent = 'center';
socialLinksContainer.style.fontSize = '1.5rem';
socialLinksContainer.style.marginTop = '0rem'

const socialLinks = author.socialLinks.forEach(socialLink => {
    const socialIcon = document.createElement('a');
    socialIcon.href = 'https://www.google.com';
    socialIcon.innerHTML = socialLink.fontawesomeIcon;
    socialIcon.style.color = 'black';
    socialIcon.style.margin = '0 0.2rem'
    socialLinksContainer.appendChild(socialIcon);
});

console.log(socialLinksContainer)

const authorBiography = document.createElement('p');
authorBiography.textContent = author.bio;
authorBiography.style.width = '80%';
authorBiography.style.margin = '0 auto';
wrapper.appendChild(authorFullName);
wrapper.appendChild(socialLinksContainer);
wrapper.appendChild(authorBiography);
