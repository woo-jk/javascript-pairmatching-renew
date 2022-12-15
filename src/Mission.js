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
    for (let i = 0; i < shuffleCrew.length; i += 2) {
      if (i === shuffleCrew.length - 1) {
        this.#fair.frontEnd[this.#fair.frontEnd.length - 1].push(shuffleCrew[1]);
        return;
      }
      const fair = shuffleCrew.slice(i, i + 2);
      this.#fair.frontEnd.push(fair);
    }
  }

  #makeBackEndFair(shuffleCrew) {
    for (let i = 0; i < shuffleCrew.length; i += 2) {
      if (i === shuffleCrew.length - 1) {
        this.#fair.backEnd[this.#fair.backEnd.length - 1].push(shuffleCrew[1]);
        return;
      }
      const fair = shuffleCrew.slice(i, i + 2);
      this.#fair.backEnd.push(fair);
    }
  }

  getFairTextList(course) {
    const fairList = course === "프론트엔드" ? this.#fair.frontEnd : this.#fair.backEnd;

    return fairList.map((fair) => fair.join(" : "));
  }
}

module.exports = Mission;
