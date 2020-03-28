const getTranslation = require("../utils/getTranslation");

const translate = yargs => {
	return(yargs.command({
	command: "translate",
	describe: "Translates a word to another language",
	builder: {
		word: {
			describe: "The word to be translated",
			demandOption: true,
			type: "string",
			alias: "w"
		},
		language: {
			describe: "The language that the word would be translated into",
			demandOption: true,
			type: "string",
			alias: "l",
		}
	},
	handler: (argv) => {
			console.log(getTranslation(argv.word, argv.language));
	}
}));
};

module.exports = translate;
