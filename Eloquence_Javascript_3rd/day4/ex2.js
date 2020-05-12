function loop(n, test, update, body) {
    for (let a = n; test(a); a = update(a)) {
        body(a);
    }
}

loop(3, n => n > 0, n => n - 2, console.log);