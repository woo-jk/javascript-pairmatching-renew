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
        if (command === "1") this.pairMatching();
      }, this.requestFeatureCommand.bind(this));
    });
  }

  pairMatching() {
    OutputView.printMissionOverView();
    this.requestMissionSelection();
  }

  requestMissionSelection() {
    InputView.readMissionSelection((input) => {
      this.handleError(() => {
        Validator.validateMissionInput(input);
        this.#missionBoard.makePair(input);
      });
    }, this.requestMissionSelection.bind(this));
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
