function decorateDomElement(domElement) {
    domElement.style.border = '2px solid #888';
    domElement.style.padding = '0.5rem 0';
    domElement.style.width = '70%';
    domElement.style.margin = '1rem auto';
    domElement.style.display = 'flex';
    domElement.style.justifyContent = 'center';
    domElement.style.fontWeight = '100';
    domElement.style.boxShadow = '5px 5px 3px #888'
}

function applyInitialStyles() {
    const body = document.body;
    const wrapper = document.querySelector('.wrapper');
    const h1Intro = document.querySelector('h1');

    body.style.width = '60%';
    body.style.margin = '0 auto';
    body.style.fontSize = '1.5rem';

    wrapper.style.display = 'flex';
    wrapper.style.height = '100vh';
    wrapper.style.flexDirection = 'column';
    wrapper.style.justifyContent = 'center';
    
    
    decorateDomElement(h1Intro);
}

function styleKeysElements() {
    const pressedKey = document.querySelector('#pressedKey');
    const keyInfo = document.querySelector('.keyInfo');
    const keyCode = document.querySelector('.keyCode');

    pressedKey.style.color = '#2EC27A';
    keyCode.style.color = '#2EC27A';
    
    decorateDomElement(keyInfo);
    decorateDomElement(keyCode);
    
    keyCode.style.fontSize = '5rem';
    keyCode.style.width = '20%';

    const keysInfoWrapper = document.querySelector('#keysInfoWrapper');
    
}

function initializeStyles() {
    // This event will be used to style some dom elements after they've been loaded
    // Initially, they are not rendered in the DOM and can't be styled, that's because this tecnique was used!
    document.body.addEventListener('keyScreenLoaded', styleKeysElements);
    
    applyInitialStyles();
}

initializeStyles();