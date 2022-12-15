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

  matchFrontEndFair() {}

  matchBackEndFair() {}
}

module.exports = Mission;
