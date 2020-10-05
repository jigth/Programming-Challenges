/** Calculates the average weight of each cat in the API.
 * catLimit: If greater than 0 returns at MAX that number of cats, else return all cats.
 */
const getCatsAvgWeight = async (catLimit=0) => {
    // API URL
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';

    let res = await fetch(catsAPI);
    let cats = await res.json();
    let calculateAverageWeight = (cat) => {
        const catWeight = cat.weight.metric;
        const numPattern = /[0-9]+/g;
        const weightNumbers = catWeight.match(numPattern);

        // Do the sum of all cat weights, converting string to numbers before adding them!
        const weightSum = weightNumbers.reduce((sum, current) => (+sum) + (+current));
        return weightSum / weightNumbers.length;
    };
    
    // Map cats object to a simpler object with 2 properties: catName and catWeight
    const averageWeightByCat = cats.map(cat => {
        return {
            name: cat.name,
            avgWeight: calculateAverageWeight(cat)} 
        });

    // Handle cases where user wants a subset of the cats or ALL of THEM!
    if (catLimit > 0) {        
        // console.log(averageWeightByCat.slice(0, catLimit));
        return averageWeightByCat.slice(0, catLimit);
    } else {
        console.log(averageWeightByCat);
        return averageWeightByCat;
    }
}

