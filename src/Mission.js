const FileHandler = require("./FileHandler");

class Mission {
  #name;
  #level;
  #fair = { frontEnd: [], backEnd: [] };

  constructor(name, level) {
    this.#name = name;
    this.#level = level;
  }

  isCorrectMission(level, name) {
    return level === this.#level && name === this.#name;
  }

  makeFair(course, shuffleCrew) {
    if (course === "프론트엔드") this.#makeFrontEndFair(shuffleCrew);
    if (course === "백엔드") this.#makeBackEndFair(shuffleCrew);
  }

  #makeFrontEndFair(shuffleCrew) {
    this.#fair.frontEnd = shuffleCrew;
  }

  #makeBackEndFair(shuffleCrew) {
    this.#fair.backEnd = shuffleCrew;
  }
}

module.exports = Mission;
