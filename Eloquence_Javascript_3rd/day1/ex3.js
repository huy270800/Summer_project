var size = 8;
var sym = "";
for (i = 0; i < size; i++) {
    for (t = 0; t < size; t++) {
        if ((i + t) % 2 == 0) {
            sym += " ";
        } else {
            sym += "#"
        }
    }
    sym += "\n";
}
console.log(sym);