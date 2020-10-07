let differentLanguages = async () => {
    // API URL;
    const countriesAPI = "https://restcountries.eu/rest/v2/all";

    // Get countries and all languages per country (with repetition)
    const res = await fetch(countriesAPI);
    const countries = await res.json();
    const languagesPerCountry = countries.map(country => country.languages)
        .reduce((languages, currentLanguage) => [...languages, ...currentLanguage]);
    
    // Take only the name prop from the previous languages
    const allLanguages = languagesPerCountry.map(language => language.name);
    
    // Make a new set using the previous names array (with repetition) and print the desired result
    const differentLanguages = Array.from(new Set(allLanguages));
    console.log(`There are ${differentLanguages.length} different languages used in the world as officials at the current date (05/10/2020)`);
}

differentLanguages()