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
    for (let mission of this.#missions) {
      if (mission.isCorrectMission(levelNumber, missionName)) {
        mission.makeFair(course);
        return true;
      }
    }
    return false;
  }
}

module.exports = MissionBoard;
