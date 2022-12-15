const MissionBoard = require("./MissionBoard");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validator = require("./Validator");
const MissionList = require("./MissionList");

class App {
  #missionBoard;

  play() {
    this.#missionBoard = new MissionBoard(MissionList);
  }

  requestFeatureCommand() {
    InputView.readFeatureSelection((command) => {
      this.handleError(() => {
        Validator.validateFeatureCommand(command);
        if (command === "1") this.fairMatching();
      }, this.requestFeatureCommand.bind(this));
    });
  }

  fairMatching() {
    OutputView.printMissionOverView();
    this.requestMissionSelection();
  }

  requestMissionSelection() {
    InputView.readMissionSelection((input) => {
      this.handleError(() => {
        Validator.validateMissionInput(input);
        this.#missionBoard.makeFair(input);
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

module.exports = App;
