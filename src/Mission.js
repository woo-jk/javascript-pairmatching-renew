class Mission {
  #name;
  #frontEndFair;
  #BackEndFair;

  constructor(name) {
    this.#name = name;
  }

  isCorrectName(name) {
    return name === this.#name;
  }

  makeFair(course) {
    if (course === "프론트엔드") this.makeFrontEndFair();
    if (course === "백엔드") this.makeBackEndFair();
  }

  makeFrontEndFair() {}

  makeBackEndFair() {}
}

module.exports = Mission;
