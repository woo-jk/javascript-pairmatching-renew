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
      if (!this.handleError(Validator.validateFeatureCommand, command)) {
        this.requestFeatureCommand();
        return;
      }
      if (command === "1") this.showMissionOverview(false);
      if (command === "2") this.showMissionOverview(true);
    });
  }

  showMissionOverview(onlyView) {
    OutputView.printMissionOverview();
    this.requestMissionSelection(onlyView);
  }

  requestMissionSelection(onlyView) {
    InputView.readMissionSelection((input) => {
      if (!this.handleError(Validator.validateMissionInput, input)) {
        this.requestMissionSelection(onlyView);
        return;
      }
      const { mission, course, isPairExist } = this.#missionBoard.getMission(input);
      if (onlyView) this.showPairList(mission, course, isPairExist);
      if (!onlyView) this.pairMatching(mission, course, isPairExist);
    });
  }

  showPairList(mission, course, isPairExist) {
    if (!isPairExist) {
      OutputView.printNotExistPair();
      this.requestMissionSelection(true);
      return;
    }
    const pairList = this.#missionBoard.getPairList(mission, course);
    OutputView.printPairMatchingList(pairList);
    this.requestFeatureCommand();
  }

  pairMatching(mission, course, isPairExist) {
    if (isPairExist) {
      this.requestRematchingCommand(mission, course);
      return;
    }
    this.#missionBoard.makePair(mission, course);
    this.showPairList(mission, course, true);
  }

  requestRematchingCommand(mission, course) {
    InputView.readRematchingCommand((command) => {
      if (!this.handleError(Validator.validateRematchingCommand, command)) {
        this.requestRematchingCommand(mission, course);
        return;
      }
      if (command === "네") this.pairMatching(mission, course, false);
      if (command === "아니오") this.requestMissionSelection(false);
    });
  }

  handleError(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
