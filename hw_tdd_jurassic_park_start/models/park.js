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

Park.prototype.dinosOfSpecies = function (species) {
  let dinos = [];
  for (let i = 0; i < this.dinosaurs.length; i++) {
    const currentDino = this.dinosaurs[i];
    if (currentDino.species === species) {
      dinos.push(currentDino);
    }
  }
  return dinos;
};

Park.prototype.removeDinosOfSpecies = function (species) {
  let dinos = this.dinosOfSpecies(species);
  for (let i = 0; i < dinos.length; i++) {
    dinoIndex = this.dinosaurs.indexOf(dinos[i]);
    this.dinosaurs.splice(dinoIndex, 1);
  }
};

Park.prototype.dailyVisitors = function () {
  let visitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    visitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return visitors;
};

Park.prototype.yearlyVisitors = function () {
  return this.dailyVisitors() * 365 ;
};

Park.prototype.yearlyRevenue = function () {
  return this.yearlyVisitors() * this.entry_fee;
};

Park.prototype.diet = function () {
  let dietObj = {'carnivore': 0,
              'herbivore': 0,
              'omnivore': 0};
  for (let i = 0; i < this.dinosaurs.length; i++){
    const diet = this.dinosaurs[i].diet;
    if (diet) {
      dietObj[diet]++;
    }
  }
  return dietObj;
};

module.exports = Park;
