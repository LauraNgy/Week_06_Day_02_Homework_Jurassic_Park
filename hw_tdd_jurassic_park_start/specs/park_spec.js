const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('brontosaurus', 'omnivore', 35);
    dinosaur3 = new Dinosaur('brontosaurus', 'carnivore', 25);
    const dinosaurs = [dinosaur1];
    park = new Park ("Jurassic", 5, dinosaurs);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic");
  });

  it('should have a ticket price', function () {
    const actual = park.entry_fee;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur2);
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosOfSpecies("brontosaurus");
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3]);
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosOfSpecies("brontosaurus");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it("should calculate the total number of visitors per day", function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dailyVisitors();
    assert.strictEqual(actual, 110);
  });

  it("should calculate the total number of visitors per year", function () {
    park.addDinosaur(dinosaur2);
    const actual = park.yearlyVisitors();
    assert.strictEqual(actual, 31025);
  });

  it("should calculate the total revenue from ticket sales for one year", function () {
    park.addDinosaur(dinosaur2);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 155125);
  });

  it("should provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type", function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.diet();
    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore':0, 'omnivore': 1});
  });

});
