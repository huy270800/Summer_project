function deepEqual(a, b) {
    if (a == b) {
        return true
    }
    if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        return false;
    }

    let object1 = Object.keys(a),
        object2 = Object.keys(b);
    if (object1.length !== object2.length) {
        return false;
    }
    for (i of object1) {
        if (!object2.includes(i) || !deepEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 5, object: 2 }));
console.log(deepEqual(obj, { here: { is: "affasf" }, object: 2 }));