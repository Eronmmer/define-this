const chalk = require("chalk");
const getDefinition = require("../utils/getDefinition");

const define = (yargs) => {
	return yargs.command({
		command: "define",
		describe: "Displays the definition of a word",
		builder: {
			word: {
				describe: "The word to be defined",
				demandOption: true,
				type: "string",
				alias: "w",
			},
		},
		handler: async (argv) => {
			try {
				console.log(await getDefinition(argv.word));
			} catch (err) {
				console.log("something went wrong");
			}
		},
	});
};

module.exports = define;
