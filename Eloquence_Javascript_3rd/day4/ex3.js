function every(array, test) {
    for (let i of array) { //loop through the array then check if the elements in the array qualify the test conditions 
        if (!test(i)) {
            return false
        }
    }
    return true
}

function every2(array, test) {
    return !array.some(element => !test(element));

}
console.log(every2([1, 2, 5], n => n > 10));
console.log(every2([2, 4, 16], n => n < 10));