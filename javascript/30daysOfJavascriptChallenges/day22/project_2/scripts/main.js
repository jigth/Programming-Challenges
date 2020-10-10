// General styles for the page
const body = document.body;
body.style.margin = '0 auto';
body.style.width = '60%';
body.style.textAlign = 'center';

// Style the wraper
const countriesWrapper = document.querySelector('.countries-wrapper');
countriesWrapper.style.display = 'grid';
countriesWrapper.style.gridTemplateColumns = '1fr '.repeat(6);
countriesWrapper.style.gridGap = '0.5rem';
countriesWrapper.style.fontSize = '13px';
countriesWrapper.style.fontWeight = '550';

// Generate list of countries dom elements to be rendered
// Returns only the outer HTML of those objects
const countriesDomObjects = countries.map(country => {
    const countryDiv = document.createElement('div');
    countryDiv.textContent = country.toUpperCase();
    countryDiv.style.padding = '2rem 1rem';
    countryDiv.style.border = 'solid 1px gainsboro';
    return countryDiv.outerHTML;
}).join('');

countriesWrapper.innerHTML = countriesDomObjects;