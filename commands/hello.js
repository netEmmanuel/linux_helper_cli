const { Command } = require("@adonisjs/ace");

class Hello extends Command {
  static get signature() {
    return "Hello";
  }

  static get description() {
    return "Hello User";
  }

  async handle() {
    console.log(`Hello User`);
  }
}

module.exports = Hello;
