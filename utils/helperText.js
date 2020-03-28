const chalk = require("chalk");
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const magenta = chalk.magenta;

const helperText = () => {
	console.log(`
	Usage
	  ${green("define-this")} ${cyan("<command>")} ${yellow("[--option]")}

	Commands
	  ${cyan("define")}       Get the definition of a word(requires an argument: word)
	  ${cyan("synonym")}      Get the synonym(s) of a word(with optional argument: number)
	  ${cyan("translate")}    Translate a word from English to another(requires an argument: language)
	  ${cyan("usage")}        Get examples of how a word is used in a sentence(with optional argument: number)

	Options
	  ${yellow("--word")}, ${yellow("-w")}        The word to define
	  ${yellow("--language")}, ${yellow("-l")}    Language of choice for translation
	  ${yellow("--number")}, ${yellow("-n")}      Number of synonyms or usages

	Examples
	  ${green("define-this")} ${cyan("define")} ${yellow("-w")} ${magenta("phenomenon")}
	  ${green("define-this")} ${cyan("synonym")} ${yellow("-w")} ${cyan("flamboyant")} ${yellow("-n")} ${magenta("4")}
	  ${green("define-this")} ${cyan("translate")} ${yellow("-w")} ${cyan("yacht")} ${yellow("-l")} ${magenta("french")}
	  ${green("define-this")} ${cyan("usage")} ${yellow("-w")} ${magenta("zone")}
`);
};

module.exports = helperText;
