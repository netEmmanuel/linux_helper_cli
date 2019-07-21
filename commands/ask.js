const { Command } = require("@adonisjs/ace");

class Ask extends Command {
  static get signature() {
    return ` ask`;
  }

  static get description() {
    return "Interact with user";
  }

  async handle() {
    const input = await this.ask(`What's your name?`, `No Name`);
    const confirm = await this.confirm(`Do you want to proceed?`, {
      default: true
    });

    if (confirm) {
      const age = await this.choice(
        `pick your age range?`,
        [
          { name: "0-18", value: 1 },
          { name: "18-29", value: 2 },
          { name: "30- upwards", value: 3 }
        ],
        1
      );
      console.log(age);
    }
  }
}

module.exports = Ask;
