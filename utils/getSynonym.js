const axios = require("axios");
const chalk = require("chalk");
const red = chalk.red;
const yellow = chalk.yellow;
const green = chalk.green;
const checkEmptyString = require("./checkEmptyString");
const successEmojis = require("../utils/successEmojis");

const datamuseSuggestionUrl = "http://api.datamuse.com/words?sp=";
const datamuseSynonymUrl = "http://api.datamuse.com/words?ml=";

const getSynonym = async (word, number) => {
	try {
		if (checkEmptyString(word)) {
			return `${red("✖ Please enter a word")}\n${yellow(
				'Try something like "define-this synonym -w flabbergast"? ✔'
			)}`;
		} else {
			const res = await axios.get(`${datamuseSynonymUrl}${word}`);
			if (res.data.length !== 0) {
				if (number) {
					const words = res.data.map((word) => word.word).slice(0, number);
					let synonyms = "";
					words.forEach((word) => (synonyms += `\n❯ ${word}`));
					return `${green(
						`${words.length === 1 ? "A " : `${words.length} `}SYNONYM${
							words.length === 1 ? "" : "S"
						} OF ${word.toUpperCase()} ${successEmojis()}`
					)}\n${synonyms}`;
				} else {
					const res = await axios.get(`${datamuseSynonymUrl}${word}`);
					return `${green(
						`A SYNONYM OF ${word.toUpperCase()} ${successEmojis()}`
					)}\n\n❯ ${res.data[0].word}`;
				}
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
				"Oops,😪 API might be down or you don't have internet connection"
			)}`;
		} else if (/^5/.test(err.status)) {
			return `${red("Oops😪 Server is down, Please try again later")}`;
		} else {
			return `${red("Oops😪 something went wrong...")}`;
		}
	}
};

module.exports = getSynonym;
