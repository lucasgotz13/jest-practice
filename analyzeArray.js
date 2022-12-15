function analyzeArray(array) {
    // find average
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i]
    }
    average = average / array.length

    // find min
    let min = array.reduce((a,b) => Math.min(a,b))

    // find max
    let max = array.reduce((a,b) => Math.max(a,b))

    //find length
    let length = array.length 

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyzeArray