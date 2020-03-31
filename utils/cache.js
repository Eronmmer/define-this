const fs = require("fs");
const os = require("os");
const path = require("path");

const init = () => {
	if (!fs.existsSync(path.join(os.homedir(), "define-this"))) {
		fs.mkdirSync(path.join(os.homedir(), "define-this"));
		fs.mkdirSync(path.join(os.homedir(), "define-this", "cache"));
	}

	if (
		!fs.existsSync(
			path.join(os.homedir(), "define-this", "cache", "define.json")
		)
	) {
		fs.writeFileSync(
			path.join(os.homedir(), "define-this", "cache", "define.json"),
			"{ }",
			"utf-8"
		);
	}

	if (
		!fs.existsSync(
			path.join(os.homedir(), "define-this", "cache", "synonym.json")
		)
	) {
		fs.writeFileSync(
			path.join(os.homedir(), "define-this", "cache", "synonym.json"),
			"[ ]",
			"utf-8"
		);
	}
};

const writeDefineCache = (word, information) => {
	const data = fs.readFileSync(
		path.join(os.homedir(), "define-this", "cache", "define.json"),
		"utf8"
	);

	const result = JSON.parse(data);
	result[word] = information;
	fs.writeFile(
		path.join(os.homedir(), "define-this", "cache", "define.json"),
		JSON.stringify(result),
		(err) => {
			if (err) throw err;
		}
	);
};

const writeSynonymCache = (
	word,
	information,
	requestNumber,
	responseNumber
) => {
	const data = fs.readFileSync(
		path.join(os.homedir(), "define-this", "cache", "synonym.json"),
		"utf8"
	);

	const result = JSON.parse(data);

	result.push({
		word,
		information,
		requestNumber,
		responseNumber,
	});

	fs.writeFile(
		path.join(os.homedir(), "define-this", "cache", "synonym.json"),
		JSON.stringify(result),
		(err) => {
			if (err) throw err;
		}
	);
};

const readDefineCache = (word) => {
	const data = fs.readFileSync(
		path.join(os.homedir(), "define-this", "cache", "define.json"),
		"utf8"
	);

	return JSON.parse(data)[word];
};

const readSynonymCache = (word, requestNumber) => {
	const data = fs.readFileSync(
		path.join(os.homedir(), "define-this", "cache", "synonym.json"),
		"utf8"
	);

	const parsed = JSON.parse(data);

	const info = parsed.filter(
		(obj) => obj.word === word && obj.requestNumber === requestNumber
	);

	return info;
};

module.exports = {
	init,
	writeDefineCache,
	writeSynonymCache,
	readDefineCache,
	readSynonymCache,
};
