const { Command } = require("@adonisjs/ace");
const fs = require("fs");

class Package extends Command {
  static get signature() {
    return "package";
  }

  static get description() {
    return "Print Package.json file content";
  }

  async handle() {
    const pkg = fs.readFileSync("package.json");
    console.log(pkg.toString());
  }
}

module.exports = Package;
