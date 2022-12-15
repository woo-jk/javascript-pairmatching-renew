const Validator = {
  validateFeatureCommand(command) {
    if (command !== "1" && command !== "2" && command !== "3" && command !== "Q") {
      throw new Error("[ERROR] 1 혹은 2 혹은 3 혹은 Q 중에 하나를 입력 해야합니다.");
    }
  },

  validateMissionInput(input) {
    const splittedInput = input.split(", ");
    if (splittedInput[0] !== "프론트엔드" && splittedInput[0] !== "백엔드") {
      throw new Error("[ERROR] 올바른 미션 정보를 입력해주세요.");
    }
    if (splittedInput[1].substring(0, splittedInput[1].length - 1) !== "레벨") {
      throw new Error("[ERROR] 올바른 미션 정보를 입력해주세요.");
    }
  },
};

module.exports = Validator;
