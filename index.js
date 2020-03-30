#!/usr/bin/env node

process.on("unhandledRejection", (err) => {
	process.exit(0);
});

const yargs = require("yargs").scriptName("define-this");
const define = require("./commands/define");
const synonym = require("./commands/synonym");
const helperText = require("./utils/helperText");

if (
	yargs.argv._.filter((elem) => {
		return elem === "define" || elem === "synonym";
	}).length === 0
) {
	helperText();
	process.exit(0);
}

define(yargs);
synonym(yargs);

yargs.parse();
