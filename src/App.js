const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validator = require("./Validator");

class App {
  play() {}

  requestFeatureCommand() {
    InputView.readFeatureSelection((command) => {
      this.handleError(() => {
        Validator.validateFeatureCommand(command);
        if (command === "1") this.fairMatching();
      }, this.requestFeatureCommand.bind(this));
    });
  }

  fairMatching() {}

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
