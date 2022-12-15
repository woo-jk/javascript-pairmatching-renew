const Validator = {
  validateFeatureCommand(command) {
    if (command !== "1" && command !== "2" && command !== "3" && command !== "Q") {
      throw new Error("[ERROR] 1 혹은 2 혹은 3 혹은 Q 중에 하나를 입력 해야합니다.");
    }
  },
};

module.exports = Validator;
