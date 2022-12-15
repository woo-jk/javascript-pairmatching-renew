const { MissionOverView } = require("./OutputView");

class Level {
  #missions;

  constructor(missions) {
    this.#missions = missions.map((mission) => new Mission(name));
  }
}
