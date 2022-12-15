const Level = require("./Level");

class MissionBoard {
  #missions;

  constructor() {
    this.#missions = {
      level1: new Level(["자동차경주", "로또", "숫자야구게임"]),
      level2: new Level(["장바구니", "결제", "지하철노선도"]),
      level3: new Level([]),
      level4: new Level(["성능개선", "배포"]),
      level5: new Level([]),
    };
  }
}

module.exports = MissionBoard;
