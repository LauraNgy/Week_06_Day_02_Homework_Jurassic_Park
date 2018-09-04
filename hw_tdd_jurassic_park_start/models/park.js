const Park = function (name, entry_fee, dinosaurs) {
  this.name = name;
  this.entry_fee = entry_fee;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const dinoIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinoIndex, 1);
};

Park.prototype.mostPopularDinosaur = function () {
  let popularDino = this.dinosaurs[0];
  for (let i = 1; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > this.dinosaurs[i-1].guestsAttractedPerDay) {
      popularDino = this.dinosaurs[i];
    }
  }
  return popularDino;
};

module.exports = Park;
