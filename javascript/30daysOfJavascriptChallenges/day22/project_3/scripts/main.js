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

const authorBiography = document.createElement('p');
authorBiography.textContent = author.bio;
authorBiography.style.width = '80%';
authorBiography.style.margin = '0 auto';
wrapper.appendChild(authorFullName);
wrapper.appendChild(socialLinksContainer);
wrapper.appendChild(authorBiography);

// Generate a column list, each element of the list should be a simple object (not an object nor a list)
function generateColumnList(title, list) {
    const containerElement = document.createElement('div');
    
    // Create the container for the list of elements
    const listContainerElement = document.createElement('ul');
    listContainerElement.style.listStyle = 'none';

    // Create column title
    const columnTitle = document.createElement('h4');
    columnTitle.textContent = title;
    
    // Create list items with the correct text content.
    const listOfElements = list.map(element => {
        const domListElement = document.createElement('li');
        domListElement.textContent = element;
        return domListElement.outerHTML;
    }).join('');

    // Append all childs to main container element
    listContainerElement.innerHTML = listOfElements;
    containerElement.appendChild(columnTitle);
    containerElement.appendChild(listContainerElement);
    
    return containerElement;
}

/*** Grid columns for AUTHOR ***/
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'gridContainer');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
gridContainer.style.gridColumnGap = '1rem';

// Author titles GRID COLUMN //
const authorTitlesColumn = generateColumnList('Titles', author.titles);
authorTitlesColumn.lastChild.style.textAlign = 'left';
gridContainer.appendChild(authorTitlesColumn);

// Author skills GRID COLUMN //
const authorSkills = author.skills.map(skill => ['✅', skill]);
const authorSkillsColumn = generateColumnList('Skills', authorSkills);
authorSkillsColumn.lastChild.style.textAlign = 'left';
gridContainer.appendChild(authorSkillsColumn);


// Author qualifications GRID COLUMN //
const authorQualifications = author.qualifications.map(qualification => ['📜', qualification]);
const authorQualificationsColumn = generateColumnList('Qualifications', authorQualifications);
authorQualificationsColumn.lastChild.style.textAlign = 'left';
gridContainer.appendChild(authorQualificationsColumn);

// Append gridContainer to DOM
wrapper.appendChild(gridContainer);



// ******************************** KEYWORDS SECTION ********************************** //
const keywordsFlex = document.createElement('div');
keywordsFlex.setAttribute('id', 'keywordsFlex');

keywordsFlex.style.display = 'flex';
keywordsFlex.style.flexWrap = 'wrap';

const keywordsList = keywords.map(keyword => {
    const keywordElement = document.createElement('div');
    keywordElement.textContent = keyword;
    return keywordElement.outerHTML;
}).join("");

keywordsFlex.innerHTML = keywordsList;

const keywordsTitle = document.createElement('h4');
keywordsTitle.textContent = 'Keywords';
keywordsTitle.style.textAlign = 'left';
wrapper.appendChild(keywordsTitle);
wrapper.appendChild(keywordsFlex);

function generateRandomColor() {
    function generateRandomNumber() {
        return Math.floor(Math.random() * 255) + 0;
    }
    const r = generateRandomNumber();
    const g = generateRandomNumber();
    const b = generateRandomNumber();
    return `rgb(${r},${g},${b})`;
}

const flexItems = document.querySelector('#keywordsFlex').childNodes;
flexItems.forEach(flexItem => {
    flexItem.style.backgroundColor = generateRandomColor();
    flexItem.style.margin = '0.1rem 0.5rem';
    flexItem.style.borderRadius = '0.5rem';
    flexItem.style.padding = '0.2rem';
});