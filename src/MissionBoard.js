const Mission = require("./Mission");

class MissionBoard {
  #missions = [];

  constructor(missionList) {
    for (let [level, missions] of missionList) {
      missions.forEach((missionName) => this.#missions.push(new Mission(missionName, level)));
    }
  }

  #getLevelNumber(levelString) {
    return Number(levelString[levelString.length - 1]);
  }

  makeFair(input) {
    const [course, levelString, missionName] = input.split(", ");
    const levelNumber = this.#getLevelNumber(levelString);
    this.#missions.forEach((mission) => {
      if (mission.isCorrectMission(levelNumber, missionName)) {
        mission.makeFair(course);
      }
    });
  }
}

module.exports = MissionBoard;
