class Mission {
  #name;
  #level;
  #pair = { frontEnd: [], backEnd: [] };

  constructor(name, level) {
    this.#name = name;
    this.#level = level;
  }

  isCorrectMission(level, name) {
    return level === this.#level && name === this.#name;
  }

  isPairExist(course) {
    if (course === "프론트엔드") return this.#pair.frontEnd.length > 0;
    if (course === "백엔드") return this.#pair.backEnd.length > 0;
  }

  makePair(course, shuffleCrew) {
    if (course === "프론트엔드") this.#makeFrontEndPair(shuffleCrew);
    if (course === "백엔드") this.#makeBackEndPair(shuffleCrew);
  }

  #makeFrontEndPair(shuffleCrew) {
    this.#pair.frontEnd = [];
    for (let i = 0; i < shuffleCrew.length; i += 2) {
      if (i === shuffleCrew.length - 1) {
        this.#pair.frontEnd[this.#pair.frontEnd.length - 1].push(shuffleCrew[1]);
        return;
      }
      const pair = shuffleCrew.slice(i, i + 2);
      this.#pair.frontEnd.push(pair);
    }
  }

  #makeBackEndPair(shuffleCrew) {
    this.#pair.backEnd = [];
    for (let i = 0; i < shuffleCrew.length; i += 2) {
      if (i === shuffleCrew.length - 1) {
        this.#pair.backEnd[this.#pair.backEnd.length - 1].push(shuffleCrew[1]);
        return;
      }
      const pair = shuffleCrew.slice(i, i + 2);
      this.#pair.backEnd.push(pair);
    }
  }

  getPairList(course) {
    const pairList = course === "프론트엔드" ? this.#pair.frontEnd : this.#pair.backEnd;

    return pairList.map((pair) => pair.join(" : "));
  }
}

module.exports = Mission;
