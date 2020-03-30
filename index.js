#!/usr/bin/env node

process.on("unhandledRejection", (err) => {
	process.exit();
});

const yargs = require("yargs").scriptName("define-this");
const define = require("./commands/define");
const synonym = require("./commands/synonym");
const translate = require("./commands/translate");
const usage = require("./commands/usage");
const helperText = require("./utils/helperText");

if (
	yargs.argv._.filter((elem) => {
		return (
			elem === "define" ||
			elem === "synonym" ||
			elem === "translate" ||
			elem === "usage"
		);
	}).length === 0
) {
	helperText();
	process.exit();
}

define(yargs);
synonym(yargs);
translate(yargs);
usage(yargs);

yargs.parse();
