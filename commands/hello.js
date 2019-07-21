const { Command } = require("@adonisjs/ace");

class Hello extends Command {
  static get signature() {
    return ` hello 
    { name?=User: enter your name }
    { -f , --friendly: say a friendly greeting}
    { -g , --hostile: say a hostile greeting :( }`;
  }

  static get description() {
    return "Say Hello to guest or personal name";
  }

  async handle({ name }, { friendly, hostile }) {
    console.log(
      `Hello ${friendly ? "friendly " : ""} ${name} ${hostile ? ":(" : ""}`
    );
  }
}

module.exports = Hello;
