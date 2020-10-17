/** File for Applying CSS styles with javascript.
 * 
 * 
 */

const body = document.querySelector('body');
body.style.width = '50%';
body.style.margin = '0 auto';
body.style.textAlign = 'center';


const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

// h1 and h2 styles
h1.style.marginBottom = '0';
h2.style.marginBottom = '0';

// h2 and h3 styles
h2.style.marginTop = '0';
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '100';
h3.style.marginTop = '0';
h3.style.textDecoration = 'underline';
h3.style.fontWeight = '100';

// h1 styles
h1.style.fontWeight = '700';
h1.style.size = '1.7rem';

// h2 styles
h2.style.size = '1.2rem';

// h3 styles
h3.style.size = '0.8rem';