class Group {
    constructor() {
        this.members = [];
    }

    add(n) {
        if (!this.has(n)) {
            this.members.push(n);
        }
    }
    delete(n) {
        this.members = this.members.filter(v => v !== n)
    }
    has(n) {
        return this.members.includes(n);
    }
    static from(collection) {
        let group = new Group;
        for (let n of collection) {
            group.add(n)
        }
        return group;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(300));