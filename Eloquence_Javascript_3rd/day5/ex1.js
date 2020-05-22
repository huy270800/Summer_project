class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(sum) {
        return new Vec(this.x + sum.x, this.y + sum.y);
    }
    minus(subtract) {
        return new Vec(this.x - subtract.x, this.y - subtract.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
        //Length from 0 to recent point 
        //sqrt(x^2 + y^2)
    }
}

console.log(new Vec(1, 8).plus(new Vec(2, 4)));
console.log(new Vec(7, 2).minus(new Vec(5, 3)));
console.log(new Vec(5, 5).length);