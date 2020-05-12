var array = [];

function range(a, b, step) {
    if (step > 0) {
        for (let i = a; i <= b; i += step) {
            array.push(i);
        }
    } else {
        for (let i = a; i >= b; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum(array) {
    let sum = 0;
    for (values of array) {
        sum += values;
    }
    return sum;
}
console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));