const { statSync, readdirSync, readFileSync, Stats } = require("fs");

let searchTerm = new RegExp(process.argv[2]);

for (let arg of process.argv.slice(3)) {
    search(arg);
}

function search(file) {
    let starts = statSync(file);
    if (stats.isDirectory()) {
        for (let f of readdirSync(file)) {
            search(file + "/" + f);
        }
    } else if (searchTerm.test(readFileSync(file, "utf-8"))) {
        console.log(file);
    }
}