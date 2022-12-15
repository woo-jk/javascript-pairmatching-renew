const Mission = require("./Mission");

class MissionBoard {
  #missions = [];

  constructor(missionList) {
    for (let [level, missions] of Object.entries(missionList)) {
      missions.forEach((missionName) => this.#missions.push(new Mission(missionName, Number(level))));
    }
  }

  #getLevelNumber(levelString) {
    return Number(levelString[levelString.length - 1]);
  }

  #getMissionInfo(input) {
    const [course, levelString, missionName] = input.split(", ");
    const level = this.#getLevelNumber(levelString);
    return [course, level, missionName];
  }

  makeFair(input) {
    const [course, level, missionName] = this.#getMissionInfo(input);
    for (let mission of this.#missions) {
      if (mission.isCorrectMission(level, missionName)) {
        mission.makeFair(course);
        return true;
      }
    }
    return false;
  }
}

module.exports = MissionBoard;
