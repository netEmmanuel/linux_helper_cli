const ace = require("@adonisjs/ace");

// Boot ace to execute commands
ace.addCommand(require("./commands/hello"));
ace.wireUpWithCommander();
ace.invoke();
