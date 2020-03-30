// checks if a string is wholly made up of whitespace or not

const checkEmptyString = (str) => {
	const regex = /\S/;
	if (!regex.test(str)) {
		return true;
	} else {
		return false;
	}
};

module.exports = checkEmptyString;
