const FileHandler = {
  getFrontEndCrew() {
    const fs = require("fs");
    return fs.readFileSync("src/resources/frontend-crew.md", "utf8");
  },

  getBackEndCrew() {
    const fs = require("fs");
    return fs.readFileSync("src/resources/backend-crew.md", "utf8");
  },
};

module.exports = FileHandler;
