(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    const bookFactory = require('../dao/bookFactory');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
      // Create an array with books
      const books = []
      // Add a few books
      books.push(bookFactory.createBook({
        id: '9780575093348',
        title: 'Oathbringer',
        author: 'Brandon Sanderson',
        genre: 'Fantasy',
        publishDate: new Date('2017-11-01'),
        price: 189,
        description: 'In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive series, humanity faces a new Desolation with the return of the Voidbringers, a foe whose numbers are as great as their thirst for vengeance.'
      }))
      books.push(bookFactory.createBook({
        id: '9789175037257',
        title: 'Omgiven av idioter',
        author: 'Thomas Erikson',
        genre: 'Fakta',
        publishDate: new Date('2017-09-01'),
        price: 65,
        description: 'Omgiven av idioter beskriver konkret och underhållande en av världens mest spridda metoder för att sortera olikheterna inom mänsklig kommunikation. Med vetenskapliga grund och genom vardagens möten ger den dig konkreta hjälpmedel att förstå de viktigaste skillnaderna mellan olika kommunikationsstilar.'
      }))
      books.push(bookFactory.createBook({
        id: '9789174619522',
        title: 'Teodlarens hustru',
        author: 'Dinah Jefferies',
        genre: 'Fiktion',
        publishDate: new Date('2017-11-01'),
        price: 55,
        description: 'Fylld av optimism kliver nittonåriga Gwendolyn Hooper av ångbåten som har tagit henne till Ceylon där hon ska träffa sin make. Men mannen som tar emot henne på plantagen är inte samme man som hon blev hals över huvud förälskad i hemma i London.'
      }))
      // console.log(books) // Print raw book objects

      // Convert to JSON
      const jsonBooks = JSON.stringify(books)
      // console.log(jsonBooks) // Print JSON object

      // Call callback
      callback(jsonBooks)
    };

}());
