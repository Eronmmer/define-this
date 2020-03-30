let emojis = [
	"😎",
	"🤓",
	"😊",
	"😀",
	"😋",
	"🙈",
	"🦅",
	"🐳",
	"🕺",
	"🤸",
	"👊",
	"🤗",
	"👌",
	"👇",
	"🤞",
	"🤘",
	"🌹",
	"🏍",
	"✈",
	"🚀",
	"🔥",
	"⚡",
	"🌟",
];

const successEmojis = () => {
	return emojis[Math.floor(Math.random() * emojis.length)];
};

module.exports = successEmojis;
