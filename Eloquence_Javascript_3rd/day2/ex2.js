function isEven(a) {
    if (a == 0) {
        return true;
    } else if (a == 1) {
        return false;
    } else if (a < 0) {
        return isEven(-a);
    } else {
        return isEven(a - 2);
    }
}
console.log(isEven(-1));

// if we put an -1 as a parameter into the function it will a bug which called "Maximun call stack exceed"
//We fix it by simply adding one more condition