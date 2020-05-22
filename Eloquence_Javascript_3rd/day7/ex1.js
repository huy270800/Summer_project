class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    for (;;) {
        try //test a block of code
        {
            return primitiveMultiply(a, b)
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) {
                throw new Error;
            }
        }
    }
}
console.log(reliableMultiply(5, 9));