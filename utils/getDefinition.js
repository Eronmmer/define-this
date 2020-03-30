const axios = require("axios");
const chalk = require("chalk");
const red = chalk.red;
const yellow = chalk.yellow;
const green = chalk.green;
const checkEmptyString = require("./checkEmptyString");
const successEmojis = require("../utils/successEmojis");

const urbanUrl =
	"https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
const config = {
	headers: {
		"Content-Type": "application/json",
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "d1c1c8727cmshfceebb9d8446ec1p153508jsnf4e86e913173",
	},
};
const datamuseSuggestionUrl = "http://api.datamuse.com/words?sp=";

const getDefinition = async (word) => {
	try {
		if (checkEmptyString(word)) {
			return `${red("✖ Please add a word")}\n${yellow(
				'Try something like "define-this define -w phenomenon"? ✔'
			)}`;
		} else {
			const res = await axios.get(`${urbanUrl}${word}`, config);
			if (res.data.list.length > 0) {
				return `${green(
					`DEFINITION OF ${word.toUpperCase()} ${successEmojis()}`
				)}\n\n${res.data.list[0].definition}`;
			} else {
				const res = await axios.get(`${datamuseSuggestionUrl}${word}`);

				if (res.data.length !== 0) {
					let suggestions = res.data.map((obj) => obj.word).slice(0, 3);
					if (suggestions.length !== 1) {
						suggestions[suggestions.length - 1] = `or ${
							suggestions[suggestions.length - 1]
						}`;
					}
					const sentence = suggestions.join(", ");
					return `${yellow(
						`Sorry mate, I couldn't find "${word}". Did you mean ${sentence}?`
					)}`;
				} else {
					return `${yellow(
						`Oops😪 I couldn't find "${word}". Please try another word.`
					)}`;
				}
			}
		}
	} catch (err) {
		if (!err.status) {
			return `${red(
				"Network error😪 please check your internet connection and try again"
			)}`;
		} else if (/^5/.test(err.status)) {
			return `${red("Oops😪 Server is down, Please try again later")}`;
		} else {
			return `${red("Oops😪 something went wrong...")}`;
		}
		// return err.message;
	}
};

module.exports = getDefinition;
