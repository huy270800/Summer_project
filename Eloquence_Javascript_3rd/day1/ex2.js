var i = 1;
for (i = 1; i <= 100; i++) {

    console.log(i + "\n");
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz \n ");
    } else if (i % 5 == 0) {
        console.log("Buzz \n");
    }
}