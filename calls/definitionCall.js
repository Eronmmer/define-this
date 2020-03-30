const axios = require("axios");

const definitionInstance = axios.create({
	baseURL: "https://mashape-community-urban-dictionary.p.rapidapi.com/",
	headers: {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "d1c1c8727cmshfceebb9d8446ec1p153508jsnf4e86e913173",
	},
});

module.exports = definitionInstance;
