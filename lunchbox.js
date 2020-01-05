var Snack = require('./snack');

class LunchBox {
constructor(lunchbox) {
 this.owner = lunchbox.owner;
 this.madeOf = lunchbox.madeOf;
 this.shape = lunchbox.shape;
 this.color = lunchbox.color;
 this.handle = true;
 this.snacks = [];
 this.healthySnacks = [];
}

acquireSnack(broughtSnacks) {
this.snacks.push(broughtSnacks);
broughtSnacks.isInLunchBox = true;
if (broughtSnacks.healthy == true) {
  this.healthySnacks.push(broughtSnacks);
  }
}

findHealthySnacks(broughtSnacks) {
 return this.healthySnacks;
}
}

module.exports = LunchBox;
