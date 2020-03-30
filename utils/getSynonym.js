const axios = require("axios");
const chalk = require("chalk");
const red = chalk.red;
const yellow = chalk.yellow;
const green = chalk.green;
const checkEmptyString = require("./checkEmptyString");
const successEmojis = require("../utils/successEmojis");
const { writeCache, readCache } = require("./cache");

const datamuseSuggestionUrl = "http://api.datamuse.com/words?sp=";
const datamuseSynonymUrl = "http://api.datamuse.com/words?ml=";

const getSynonym = async (word, number) => {
	try {
		if (checkEmptyString(word)) {
			return `${red("✖ Please enter a word")}\n${yellow(
				'Try something like "define-this synonym -w flabbergast"? ✔'
			)}`;
		}

		const cache = readCache("synonym", word);
		if (cache && cache.length > 0) {
			return `${green(
				`${word.length === 1 ? "A " : `${word.length} `}SYNONYM${
					word.length === 1 ? "" : "S"
				} OF ${word.toUpperCase()} ${successEmojis()}`
			)}\n${cache}`;
		}

		const res = await axios.get(`${datamuseSynonymUrl}${word}`);
		if (res.data.length !== 0) {
			if (number) {
				const words = res.data
					.map((word) => word.word)
					.slice(0, Math.abs(number));
				let synonyms = "";
				words.forEach((word) => (synonyms += `\n❯ ${word}`));
				writeCache("synonym", word, synonyms);
				return `${green(
					`${words.length === 1 ? "A " : `${words.length} `}SYNONYM${
						words.length === 1 ? "" : "S"
					} OF ${word.toUpperCase()} ${successEmojis()}`
				)}\n${synonyms}`;
			}
			const res1 = await axios.get(`${datamuseSynonymUrl}${word}`);
			writeCache("synonym", word, res1.data[0].word);
			return `${green(
				`A SYNONYM OF ${word.toUpperCase()} ${successEmojis()}`
			)}\n\n❯ ${res1.data[0].word}`;
		}

		const res2 = await axios.get(`${datamuseSuggestionUrl}${word}`);

		if (res1.data.length !== 0) {
			let suggestions = res2.data.map((obj) => obj.word).slice(0, 3);
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
	} catch (err) {
		if (!err.status) {
			console.log(err);
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
