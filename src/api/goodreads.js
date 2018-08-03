const fetch = require('node-fetch');
const util = require('util')
const parseXml = util.promisify(require('xml2js').parseString)
const {config} = require('../config');


const fetchAuthor = (id) => {
  return fetch(`https://www.goodreads.com/author/show.xml?id=${id}&key=${config.goodreadsKey}`)
       .then(response => response.text())
       .then(parseXml)
}

const fetchBooks = (id) => {
  return fetch(`https://www.goodreads.com/book/show/${id}.xml?key=${config.goodreadsKey}`)
       .then(response => response.text())
       .then(parseXml)
}


export {
  fetchAuthor,
  fetchBooks
}