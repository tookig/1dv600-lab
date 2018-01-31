'use strict'

const defaultProperties = {
  id: 0,
  title: 'unknown title',
  author: 'unknown author',
  genre: 'unknown genre',
  publishDate: undefined,
  price: undefined,
  description: 'no description'
}

const bookPrototype = {}

const createBook = function(bookProperties) {
  const properties = Object.assign({}, defaultProperties, bookProperties)
  return Object.assign(Object.create(bookPrototype), properties)
}

module.exports.createBook = createBook
