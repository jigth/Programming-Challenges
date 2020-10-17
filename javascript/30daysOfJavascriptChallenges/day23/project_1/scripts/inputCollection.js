/** File for input management (interacts with prime numbers displaying)
 * 
 * 
 */

// Renders input and prime numbers grid!
function initializeContent() {
    // Create basic elements
    const input = document.createElement('input');
    const inputFeedback = document.createElement('span');
    const button = document.createElement('button');
    
    // Create or select wrappers
    const wrapper = document.querySelector('.wrapper');
    const inputWrapper = document.createElement('div');
    
    // Initialize properties of basic elements
    button.textContent = 'Generate Numbers!';
    inputFeedback.setAttribute('id', 'inputFeedback');

    // Customize wrappers
    inputWrapper.setAttribute('id', 'inputWrapper');
    
    // Append children to wrappers
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(button);
    wrapper.appendChild(inputFeedback);
    wrapper.appendChild(inputWrapper);

    // Display colored numbers in the screen
    displayNumbers();
}

// Adds event listeners to inputWrapper elements
function addListeners() {

    const generatorButton = document.querySelector('button');
    const numbersInput = document.querySelector('input');
    const inputFeedback = document.querySelector('#inputFeedback');

    function handleSubmit() {
        const topNumber = numbersInput.value.trim();
        const numberPattern = /^[0-9]+$/;
        
        if (numberPattern.test(topNumber)) {
            inputFeedback.textContent = '';
            numbersInput.value = '';
            displayNumbers(0, topNumber, true);
        } else {
            if (topNumber.length > 0) {
                inputFeedback.textContent = 'Input must be a POSITIVE number';
            } else {
                inputFeedback.textContent = 'Enter number value on the input field to generate numbers';
            }
        }
    }

    generatorButton.addEventListener('click', handleSubmit);
    numbersInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
}

initializeContent();
addListeners();

