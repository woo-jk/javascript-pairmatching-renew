const Mission = require("./Mission");

class Level {
  #missions;

  constructor(missions) {
    this.#missions = missions.map((mission) => new Mission(mission));
  }

  makeFair(course, missionName) {
    this.#missions.forEach((mission) => {
      if (mission.isCorrectName(missionName)) {
        mission.makeFair(course);
      }
    });
  }
}

module.exports = Level;
