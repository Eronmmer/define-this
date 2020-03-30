const fs = require("fs");
const os = require("os");

const init = () => {
	if (!fs.existsSync(`${os.homedir()}/define-this/cache`)) {
		fs.mkdirSync(`${os.homedir()}/define-this/cache/`);
	}

	if (!fs.existsSync(`${os.homedir()}/define-this/cache/define.json`)) {
		fs.writeFile(
			`${os.homedir()}/define-this/cache/define.json`,
			"{ }",
			() => {}
		);
	}

	if (!fs.existsSync(`${os.homedir()}/define-this/cache/synonym.json`)) {
		fs.writeFile(
			`${os.homedir()}/define-this/cache/synonym.json`,
			"{ }",
			() => {}
		);
	}
};

const writeCache = (category, key, word) => {
	if (!(category === "define" || category === "synonym")) {
		console.error("invalid category");
		return;
	}

	// eslint-disable-next-line prettier/prettier
    const data = fs.readFileSync(`${os.homedir()}/define-this/cache/${category}.json`, 'utf8');

	const result = JSON.parse(data);

	result[key] = word;

	fs.writeFile(
		`${os.homedir()}/define-this/cache/${category}.json`,
		JSON.stringify(result),
		() => {}
	);
};

const readCache = (category, key) => {
	if (!(category === "define" || category === "synonym")) {
		console.error("invalid category");
		return;
	}

	// eslint-disable-next-line prettier/prettier
    const data = fs.readFileSync(`${os.homedir()}/define-this/cache/${category}.json`, 'utf8');

	return JSON.parse(data)[key];
};

module.exports = {
	init,
	writeCache,
	readCache,
};
