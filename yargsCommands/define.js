const getDefinition = require("../utils/getDefinition");

const define = yargs => {
	return(yargs.command({
	command: "define",
	describe: "Displays the definition of a word",
	builder: {
		word: {
			describe: "The word to be defined",
			demandOption: true,
			type: "string",
			alias: "w"
		}
	},
	handler: (argv) => {
			console.log(getDefinition(argv.word));
	}
}));
};

module.exports = define;
