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

module.exports = Park;
