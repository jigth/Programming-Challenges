/** File for Applying CSS styles with javascript.
 * 
 * 
 */

function customizeBody() {
    const body = document.querySelector('body');
    body.style.width = '50%';
    body.style.margin = '0 auto';
    body.style.textAlign = 'center';
}

function customizeTitles() {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    
    // h1 and h2 styles
    h1.style.marginBottom = '0';
    h2.style.marginBottom = '0';
    
    // h2 and h3 styles
    h2.style.marginTop = '0';
    h2.style.fontWeight = '100';
    h3.style.marginTop = '0';
    h3.style.fontWeight = '100';
    
    // h1 styles
    h1.style.fontWeight = '700';
    h1.style.size = '1.7rem';
    h1.style.color = '#2EC27A';
    
    // h2 styles
    h2.style.size = '1.2rem';
    
    // h3 styles
    h3.style.size = '0.8rem';
}

function customizeInput() {
    // Elements to modify
    const inputWrapper = document.querySelector('#inputWrapper');
    const numbersInput = document.querySelector('input');
    const inputFeedback = document.querySelector('#inputFeedback');
    const generatorButton = document.querySelector('button');
    
    // Styles for inputWrapper
    inputWrapper.style.display = 'flex';
    inputWrapper.style.justifyContent = 'space-between';
    inputWrapper.style.height = '2rem';
    inputWrapper.style.marginBottom = '1rem'

    // Styles for numbersInput
    numbersInput.style.width = '65%';
    numbersInput.style.marginLeft = '11%';

    // Styles for inputFeedback
    inputFeedback.style.textAlign = 'right';
    inputFeedback.style.color = 'red';

    // Styles for generatorButton
    generatorButton.style.backgroundColor = '#2EC27A';  // Green
    generatorButton.style.color = '#f2f2f2';
    generatorButton.style.fontWeight = 'bold';
    generatorButton.style.width = '21%';
}

customizeBody();
customizeTitles();
customizeInput();