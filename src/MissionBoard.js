const MissionUtils = require("@woowacourse/mission-utils");
const FileHandler = require("./FileHandler");
const Mission = require("./Mission");
const shuffleArray = require("./shuffleArray");

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

  #getShuffleCrew(course) {
    const crewString = course === "프론트엔드" ? FileHandler.getFrontEndCrew() : FileHandler.getBackEndCrew();
    const crewList = crewString.substring(0, crewString.length - 1).split(" ");

    return shuffleArray(crewList);
  }

  #getMission(level, missionName) {
    for (let mission of this.#missions) {
      if (mission.isCorrectMission(level, missionName)) return mission;
    }

    throw new Error("[ERROR] 입력하신 미션은 존재하지 않습니다.");
  }

  makePair(input) {
    const [course, level, missionName] = this.#getMissionInfo(input);
    const shuffleCrew = this.#getShuffleCrew(course);
    const selectedMission = this.#getMission(level, missionName);

    selectedMission.makePair(course, shuffleCrew);
    return selectedMission.getPairTextList();
  }
}

module.exports = MissionBoard;
