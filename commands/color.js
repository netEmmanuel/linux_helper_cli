const { Command } = require("@adonisjs/ace");

class Color extends Command {
  static get signature() {
    return `color logs`;
  }

  static get description() {
    return "Display colorful log messages";
  }

  async handle() {
    this.success(`Yes!!`);
    this.info(`That's informative :)`);
    this.warn(`Warning You!`);
    this.error(`Oops, that's really bad`);

    console.log(`======================`);

    this.completed(`create`, `done.js`);
    this.failed(`create`, `Failed. File already exists`);
  }
}

module.exports = Color;
