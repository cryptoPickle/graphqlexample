const fetch = require('node-fetch');
const {config} = require('../config')

const translate = (lang, str) => {
  const apiKey ='AIzaSyBsM3cdNvf1qR2YU1OiHLSJZpKmka3rWz8';
  const url = `https://www.googleapis.com/language/translate/v2?key=${config.translateKey}&source=en&target=${lang}&q=${encodeURIComponent(str)}`;
  return fetch(url)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.data.translations[0].translatedText);
};


export default translate; 