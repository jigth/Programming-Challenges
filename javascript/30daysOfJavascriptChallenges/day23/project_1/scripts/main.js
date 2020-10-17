/** Prime number display and generation file
 * 
 * 
 */


/** Verify if a number is prime checking if it is NOT divisible from 2 to the half of that number */
const isPrimeNumber = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

/** Get prime numbers from a specified number to a specified limit number */
const getPrimeNumbers = (from=0, to=102) => {
    const primeNumbers = [];
    for (let i = from; i <= to; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

const getColoredNumbers = (from=0, to=102) => {
    const primeNumbers = getPrimeNumbers(from, to);
    const primeNumbersWithColor = primeNumbers.map(primeNumber => { 
        return {
            number: primeNumber,
            color: '#FD5E53'  // Red color
        }
    });

    const coloredNumbers = [];
    for (let i = from; i < to; i++) {
        if (primeNumbers.includes(i)) {
            // If number is a prime number include the one with color (red)
            const primeToPush = primeNumbersWithColor.shift();
            coloredNumbers.push(primeToPush); 
        } else if (i % 2 == 0) {
            // Case even number
            const coloredNumber = {
                number: i,
                color: '#2EC27A'  // Green color
            }
            coloredNumbers.push(coloredNumber);
        } else {
            // Case odd number
            const coloredNumber = {
                number: i,
                color: '#FDDB3A' // Yellow color
            }
            coloredNumbers.push(coloredNumber);
        }
    }
    return coloredNumbers;
}

/** Allow to delete old numbers so that new calculated numbers are rendered alone 
 *
 * IMPORTANT!: This method is only triggered by user input and allows calculated 
 * numbers to be rendered correctly (not stacked bellow of the previous calculated
 * numbers)
*/
const refreshNumbers = () => {
    if (document.querySelector('.primeWrapper') !== null) {
        const primeWrapper = document.querySelector('.primeWrapper');
        const wrapper = document.querySelector('.wrapper');
        wrapper.removeChild(primeWrapper);
    }
}

const displayNumbers = (from=0, to=102, override=false) => {
    const coloredNumbers = getColoredNumbers(from, to);

    const wrapper = document.querySelector('.wrapper');
    const primeWrapper = document.createElement('div');
    primeWrapper.setAttribute('class', 'primeWrapper');

    primeWrapper.style.display = 'grid';
    primeWrapper.style.gridTemplateColumns = '1fr '.repeat(9);
    primeWrapper.style.gridGap = '0.3rem';

    const domDivElements = [];
    coloredNumbers.forEach(coloredNumber => {
        const divElement = document.createElement('div');
        divElement.textContent = coloredNumber.number;
        divElement.style.backgroundColor = coloredNumber.color;
        divElement.style.color = 'white';
        divElement.style.textAlign = 'center';
        divElement.style.fontWeight = 'bold';
        divElement.style.fontSize = '1.8rem';
        domDivElements.push(divElement);
    });

    primeWrapper.innerHTML = domDivElements.map(el => el.outerHTML)
        .join('');

    wrapper.appendChild(primeWrapper);

    if (override) {
        refreshNumbers();
    }
}

// displayNumbers();