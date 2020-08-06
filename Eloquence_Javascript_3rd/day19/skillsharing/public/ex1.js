const { readFileSync, writeFile } = require("fs");

const fileName = "./talk.json";

function loadTalks() {
    let json;
    try {
        json = JSON.parse(readFileSync(fileName, "utf8"));
    } catch (e) {
        json = {};
    }
    return Object.assign(Object.create(null), json);
}

SkillShareServer.prototype.updated = function() {
    this.version++;
    let response = this.talkResponse();
    this.waiting.forEach(resolve => resolve(response));
    this.waiting = [];

    writeFile(fileName, JSON.stringify(this.talks), e => {
        if (e) throw e;
    })
}
new SkillShareServer(loadTalks().start(8000));