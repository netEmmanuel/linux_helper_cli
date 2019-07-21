const ace = require("@adonisjs/ace");

// Boot ace to execute commands
ace.addCommand(require("./commands/hello"));
ace.addCommand(require("./commands/package"));
ace.addCommand(require("./commands/ask"));
ace.addCommand(require("./commands/color"));
ace.wireUpWithCommander();
ace.invoke();
