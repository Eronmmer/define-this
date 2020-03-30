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
	  ${cyan(
			"define"
		)}       Get the definition of a word(requires an argument: word)
	  ${cyan(
			"synonym"
		)}      Get the synonym(s) of a word(optional argument: number)

	Options
	  ${yellow("--word")}, ${yellow(
		"-w"
	)}        The word whose synonym/definition would be displayed
	  ${yellow("--number")}, ${yellow(
		"-n"
	)}      Number of synonyms to display. Defaults to one if not supplied

	Examples
	  ${green("define-this")} ${cyan("define")} ${yellow("-w")} ${magenta(
		"phenomenon"
	)}
	  ${green("define-this")} ${cyan("synonym")} ${yellow("-w")} ${cyan(
		"flamboyant"
	)} ${yellow("-n")} ${magenta("4")}
`);
};

module.exports = helperText;
