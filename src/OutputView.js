const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  MissionOverView: [
    "\n#############################################",
    "과정: 백엔드 | 프론트엔드",
    "미션:",
    "  - 레벨1: 자동차경주 | 로또 | 숫자야구게임",
    "  - 레벨2: 장바구니 | 결제 | 지하철노선도",
    "  - 레벨3:",
    "  - 레벨4: 성능개선 | 배포",
    "  - 레벨5:",
    "#############################################",
  ],

  printMissionOverView() {
    this.MissionOverView.forEach((text) => MissionUtils.Console.print(text));
  },

  printPairMatchingList(pairMatchingList) {
    MissionUtils.Console.print("\n페어 매칭 결과입니다.");
    pairMatchingList.forEach((pair) => MissionUtils.Console.print(pair));
    MissionUtils.Console.print();
  },

  printPairMathchingReset() {
    MissionUtils.Console.print("\n초기화 되었습니다.\n");
  },

  printErrorMessage(error) {
    MissionUtils.Console.print(error.message);
  },
};

module.exports = OutputView;
