function countChar(e, char) {
    let count = 0;
    for (i = 0; i < e.length - 1; i++) {
        if (e[i] == char) {
            count += 1;
        }
    }
    return count;
}

function countBs(e) {
    return countChar(e, "B");

}
console.log(countBs("BBBBBBBE", "B"));
console.log(countChar("BuiQuocHuy", "u"));