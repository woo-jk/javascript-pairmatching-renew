const MissionBoard = require("./MissionBoard");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validator = require("./Validator");
const MissionList = require("./MissionList");

class App {
  #missionBoard;

  play() {
    this.#missionBoard = new MissionBoard(MissionList);
    this.requestFeatureCommand();
  }

  requestFeatureCommand() {
    InputView.readFeatureSelection((command) => {
      this.handleError(() => {
        Validator.validateFeatureCommand(command);
        if (command === "1") this.showMissionOverview();
      }, this.requestFeatureCommand.bind(this));
    });
  }

  showMissionOverview() {
    OutputView.printMissionOverview();
    this.requestMissionSelection();
  }

  requestMissionSelection() {
    InputView.readMissionSelection((input) => {
      this.handleError(() => {
        Validator.validateMissionInput(input);
        const { mission, course, isPairExist } = this.#missionBoard.getMission(input);
        if (isPairExist) this.requestRematchingCommand(mission, course);
        else this.pairMatching(mission, course);
      }, this.requestMissionSelection.bind(this));
    });
  }

  requestRematchingCommand(mission, course) {
    InputView.readRematchingCommand((command) => {
      this.handleError(() => {
        Validator.validateRematchingCommand(command);
        if (command === "네") this.pairMatching(mission, course);
        if (command === "아니오") this.requestMissionSelection();
      }, this.requestRematchingCommand.bind(this));
    });
  }

  pairMatching(mission, course) {
    const pairList = this.#missionBoard.makePair(mission, course);
    OutputView.printPairMatchingList(pairList);
    this.requestFeatureCommand();
  }

  handleError(callback, request) {
    try {
      callback();
    } catch (error) {
      OutputView.printErrorMessage(error);
      request();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
