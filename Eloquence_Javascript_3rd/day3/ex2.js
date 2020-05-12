var result = [];

function reverseArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
console.log(reverseArray(["Huy", "Minh", "Loc"]));

var array = [1, 2, 3, 4, 5, 6, 7];

function reverseArrayInPlace(array) {
    i = array.length - 2;
    for (k = 0; k <= array.length - 1; k++) {
        char = array[i]; //took the value before the last value of the array
        array.push(char); //we push the value after the last value to the new array
        array.splice(i, 1); //then we delete that value
        i--;
    }
    return array

}
console.log(reverseArrayInPlace(array));