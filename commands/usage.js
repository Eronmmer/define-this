const getUsage = require("../utils/getUsage");

const usage = (yargs) => {
	return yargs.command({
		command: "usage",
		describe: "Displays example of the usage of a word",
		builder: {
			word: {
				describe: "The word to display an example of",
				demandOption: true,
				type: "string",
				alias: "w",
			},
			number: {
				describe:
					"The number of examples to display. Defaults to one. Maximum of three",
				type: "number",
				alias: "n",
			},
		},
		handler: (argv) => {
			console.log(getUsage(argv.word));
		},
	});
};

module.exports = usage;
