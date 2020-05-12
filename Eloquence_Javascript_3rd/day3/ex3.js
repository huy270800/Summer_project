function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
console.log(arrayToList([10, 50]));

function listToArray(list) {
    let array = [];
    for (let x = list; x; x = x.rest) {
        array.push(x.value);
    }
    return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
    return { value, rest: list };
}
console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
    if (!list) {
        return undefined;
    } else if (n == 0) {
        return list.value;
    } else {
        return nth(list.rest, n - 1);
    }
}