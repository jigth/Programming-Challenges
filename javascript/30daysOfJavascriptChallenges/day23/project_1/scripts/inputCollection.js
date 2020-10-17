/** File for input management (interacts with prime numbers displaying)
 * 
 * 
 */

const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Generate Numbers!';

const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(input);
wrapper.appendChild(button);