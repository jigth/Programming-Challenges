/** Reusing code from day 21 to start from there!
 *  To make this work, DOM structure should be the same!
 */

const getCurrentDate = () => {
    const currentDate = new Date()

    /* Month must be a number from 0 to 11 */
    const toHumanReadableMonth = (monthNumber) => {
        const months = {
            '0': 'January',
            '1': 'February',
            '2': 'March',
            '3': 'April',
            '4': 'May',
            '5': 'June',
            '6': 'July',
            '7': 'August',
            '8': 'September',
            '9': 'October',
            '10': 'November',
            '11': 'December',
        }
        return months[monthNumber]
    }

    const getHourMinutesSeconds = (currentDate) => {
        let hour = currentDate.getHours()
        let minutes = currentDate.getMinutes()
        let seconds = currentDate.getSeconds()

        hour = hour < 10 ? `0${hour}` : hour
        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds
        
        return `${hour}:${minutes}:${seconds}`
    }

    const year = currentDate.getFullYear()
    const month = toHumanReadableMonth(currentDate.getMonth())
    const day = currentDate.getDate()
    const dayMonthYear = `${month} ${day}, ${year}`

    let hourMinutesSeconds = getHourMinutesSeconds(currentDate)

    return `${dayMonthYear} ${hourMinutesSeconds}`
}

/** Change color of a dom element each X miliseconds
 * domElement: Element of the dom to be modified
 * styleProperty: StyleProperty to be modified. Default: 'color'
 * miliseconds: Interval of execution for the function, it's 1 seconds by default.
 * colors: List of colors to use
 **/
const changeColors = (
    domElement,
    styleProperty='color', 
    miliseconds=1000,
    colors=['khaki', 'blue', 'green', 'fuchsia', 'aqua', 'purple']) => {

        let i = 0;
        const selectColors = () => {
            const colorIndex = i % colors.length
            const color = colors[colorIndex];
            domElement.style[styleProperty] = color;
            i++
        }
        setInterval(selectColors, miliseconds)
}

// Update text of the full date to current each second
const updateDate = (dateDomElement) => {
    const currentDate = getCurrentDate()
    dateDomElement.textContent = currentDate
}

// Help adding some interactivity to the elements of the site
const addMagicActions = () => {
    // Change color of the year dynamically
    const yearTitle = document.querySelector('#title-year')
    // First color of used colors (used to not display black when page renders)
    yearTitle.style.color = 'khaki'
    changeColors(yearTitle)

    // Change background color of the full date dynamically
    const dateDomElement = document.querySelector('#fulldate')
    const colors = ['rosybrown', 'greenyellow', 'aquamarine', 'burlywood']
    
    // Set autoupdate for colors
    changeColors(dateDomElement, 'backgroundColor', 1000, colors)
    
    // Display date inmediately, without waiting 1 second!
    dateDomElement.style.backgroundColor = colors[0]
    updateDate(dateDomElement) 

    // Set auto update for date
    setInterval(() => updateDate(dateDomElement), 1000)

    // Change background color of elements
    document.querySelectorAll('.done').forEach(element => {
        element.style.backgroundColor = '#31a331'
    })

    document.querySelectorAll('.ongoing').forEach(element => {
        element.style.backgroundColor = '#ffe751'
    })

    document.querySelectorAll('.coming').forEach(element => {
        element.style.backgroundColor = '#e45454'
    })
}

addMagicActions()