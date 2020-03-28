#!/usr/bin/env node
const yargs = require("yargs").scriptName("define-this");
const define = require("./yargsCommands/define");
const synonym = require("./yargsCommands/synonym");
const translate = require("./yargsCommands/translate");
const usage = require("./yargsCommands/usage");
const helperText = require("./utils/helperText");

if (yargs.argv._.filter(elem => {
	return elem === "define" || elem === "synonym" || elem === "translate" || elem === "usage";
}).length === 0) {
	helperText();
	process.exit();
}

define(yargs);
synonym(yargs);
translate(yargs);
usage(yargs);

yargs.parse();
console.log(yargs.argv);
