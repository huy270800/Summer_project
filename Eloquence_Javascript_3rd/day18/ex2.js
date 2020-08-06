//Directory creation

const { METHODS } = require("http");
const { stat } = require("fs");

const { mkdir } = require("fs").promises;

METHODS.MKCOL = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        await mkdir(path);
        return { status: 204 };
    }
    if (stats.isDirectory()) return { status: 204 };
    else return { status: 400, body: "Not a directory" }
}