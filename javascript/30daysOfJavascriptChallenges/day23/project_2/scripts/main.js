/** This file handles logic for the application in order for it to work correctly
 * 
 */

function renderIntro() {
    const wrapper = document.createElement('wrapper');
    const textIntro = document.createElement('h1');
    
    wrapper.setAttribute('class', 'wrapper');

    textIntro.setAttribute('class', 'textIntro');
    textIntro.textContent = 'Press any keyboard key';
    
    wrapper.appendChild(textIntro);
    document.body.appendChild(wrapper);
}

function clearIntro() {
    const wrapper = document.querySelector('.wrapper');
    const elementToDestroy = document.querySelector('.textIntro');
    wrapper.removeChild(elementToDestroy);
}

function loadKeysInfo(key, keyCode) {
    const wrapper = document.querySelector('.wrapper');
    const keysInfoText = document.createElement('h1');
    const keysInfoNumber = document.createElement('h1');

    keysInfoText.setAttribute('class', 'keyInfo');
    keysInfoText.innerHTML = 'You pressed &nbsp; <span id="pressedKey"></span>';
    
    keysInfoNumber.setAttribute('class', 'keyCode');
    keysInfoNumber.textContent = keyCode;
    
    wrapper.appendChild(keysInfoText);
    wrapper.appendChild(keysInfoNumber);
    document.body.append(wrapper);
    document.querySelector('#pressedKey').textContent = key;
}

function refreshKeysInfo(key, keyCode) {
    const pressedKey = document.querySelector('#pressedKey');
    const pressedKeyCode = document.querySelector('.keyCode');
    pressedKey.textContent = key;
    pressedKeyCode.textContent = keyCode;
}

/** Add event listeners to be used in this page
 * 
 */
function addListeners(keyScreenLoadedEvent) { 
    /** Initialize (and updates) Load keys screen acording to "keydown" javascript event.
     *  "keydown" is used instead of "keypress" because it detects a larger broader range of keys.
     */
    document.addEventListener('keydown', (e) => {
        // Get pressed key, handles space because it doesn't have a 'e.key' asociated yet (October 2020).
        const pressedKeyCode = e.keyCode;
        const pressedKey = e.code === 'Space' ? 'Space' : e.key;
        if (document.querySelector('#pressedKey') === null) {
            clearIntro();
            loadKeysInfo(pressedKey, pressedKeyCode);
            document.body.dispatchEvent(keyScreenLoadedEvent);
        } else {
            refreshKeysInfo(pressedKey, pressedKeyCode);
        }
    });
}

function initPage() {
    // This event will be used to style some dom elements after they've been loaded
    // Initially, they are not rendered in the DOM and can't be styled, that's because this tecnique was used!
    const keyScreenLoadedEvent = new Event('keyScreenLoaded');

    // Call initial functions
    renderIntro();
    addListeners(keyScreenLoadedEvent);
}

initPage();