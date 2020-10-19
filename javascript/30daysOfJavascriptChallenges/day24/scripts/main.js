function getPlanets(uppercase=false) {
    const planets = [
        'earth',
        'jupiter',
        'mars',
        'mercury',
        'moon',
        'pluto',
        'saturn',
        'uranus',
        'venus'
    ]

    return uppercase 
        ? planets.map(planet => planet.toUpperCase())
        : planets;
}

function calculateObjectWeight(planet, objectMass) {
    planet = planet.toLowerCase();  // Normalize planet string

    // Get gravity of a planet in unit m/s^2
    function getPlanetGravity(planet) {
        const planetsGravity = {
            'earth': 9.8,
            'jupiter': 24.79,
            'mars': 3.711,
            'mercury': 3.7,
            'moon': 1.62,
            'pluto': 0.62,
            'saturn': 10.44,
            'uranus': 8.87,
            'venus': 8.87
        };

        const planetExist = planetsGravity.hasOwnProperty(planet);
        if (planetExist) {
            return planetsGravity[planet];
        } else {
            throw new Error("Planet does not exist");
        }
    }

    try {
        const gravity = getPlanetGravity(planet);
        return objectMass * gravity;  // Weight of the object
    } catch (err) {
        console.log(err);
    }
}

// Validate if input is a positive number
function isValidNumber(number) {
    // Regex pattern for integer or decimal positive number
    const validNumber = /^[0-9]+(\.[0-9])?[0-9]*$/;
    return validNumber.test(number);
}

// Validate if some planet has been selected as option in the 'select' element.
function isValidPlanet(planet) {
    // Values composed by letters, numbers and hyphens (only valid between the characters of the name)
    // Examples of valid planet names: Earth, VENUS, MERCURy, R-20112, KWC-A2BC2
    const validPlanetName = /^[^-]?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)?[^-]?$/;

    // Passes the regex and its name is not default value for select option (none)
    return validPlanetName.test(planet) && planet !== 'none';
}

function updateDomWithResult(objectWeight, errorMessage='') {
    // TODO: Present the object weight in the GUI
    if (errorMessage.length < 0) {
        // TODO: Render original result
    } else {
        // TODO: Render appropiate error message
    }
}


// Action executed on button click
function handleClick() {
    const objectMass = document.querySelector('input').value;
    const selectElement = document.querySelector('select');
    const selectedPlanet = selectElement.options[selectElement.selectedIndex].value;
    
    if (isValidNumber(objectMass)) {
        if (isValidPlanet(selectedPlanet)) {
            const objectWeight = calculateObjectWeight(selectedPlanet, objectMass);
            // TODO: Show the selected planet and object weight result.
        } else {
            updateDomWithResult(undefined, "You did not choose a planet yet");
        }
    } else {
        updateDomWithResult(undefined, "Mass is required");
    }
}

function initializeListeners() {


    document.querySelector('button').addEventListener('click', handleClick);
}

function initializeSelect() {
    const select = document.querySelector('select');
    const planetsUpperCase = getPlanets(true);
    const newOptions = planetsUpperCase.map(planet => {
        return `<option value='${planet.toLowerCase()}'>${planet}</option>`;
    });

    // Initialize select with original option plus the rest of added planets.
    select.innerHTML = `${select.innerHTML}${newOptions.join('')}`;
}

function initializeApp() {
    initializeListeners();
    initializeSelect();
}

initializeApp();