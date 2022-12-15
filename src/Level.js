const Mission = require("./Mission");

class Level {
  #missions;

  constructor(missions) {
    this.#missions = missions.map((mission) => new Mission(mission));
  }
}

module.exports = Level;
