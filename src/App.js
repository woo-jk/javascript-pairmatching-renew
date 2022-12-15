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
        const pairList = this.#missionBoard.makePair(input);
        OutputView.printPairMatchingList(pairList);
        this.requestFeatureCommand();
      }, this.requestMissionSelection.bind(this));
    });
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
