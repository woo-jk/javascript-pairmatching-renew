class Mission {
  #name;
  #level;
  #fair = { frontEnd, backEnd };

  constructor(name, level) {
    this.#name = name;
    this.#level = level;
  }

  isCorrectMission(level, name) {
    return level === this.#level && name === this.#name;
  }

  makeFair(course) {
    if (course === "프론트엔드") this.makeFrontEndFair();
    if (course === "백엔드") this.makeBackEndFair();
  }

  makeFrontEndFair() {}

  makeBackEndFair() {}
}

module.exports = Mission;
