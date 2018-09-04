const Park = function (name, entry_fee, dinosaurs) {
  this.name = name;
  this.entry_fee = entry_fee;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

module.exports = Park;
