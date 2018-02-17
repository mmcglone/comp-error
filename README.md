# comp-error
[![Build Status](https://travis-ci.org/mmcglone/comp-error.svg?branch=master)](https://travis-ci.org/mmcglone/comp-error)
[![Coverage Status](https://coveralls.io/repos/mmcglone/comp-error/badge.svg?branch=master)](https://coveralls.io/r/mmcglone/comp-error?branch=master)
[![npm version](https://badge.fury.io/js/comp-error.svg)](https://badge.fury.io/js/comp-error)

A Javascript library to help with error handling in functional composition

## Example Usage
```javascript
const { either, map, unwrap } = require('comp-error');
const pipe = require('lodash/fp/pipe');

const data = {
  books: {
    1: {
      id: 1,
      title: 'Don Quixote',
      author: 1,
    },
    2: {
      id: 2,
      title: 'A Tale of Two Cities',
      author: 2,
    },
    3: {
      id: 3,
      title: 'The Lord of the Rings',
      author: 3,
    },
    4: {
      id: 4,
      title: 'The Little Prince',
    },
  },
  authors: {
    1: {
      id: 1,
      penName: 'Miguel de Cervantes',
    },
    2: {
      id: 2,
    }
  }
};

const bookFromId = (id) => {
  const book = data.books[id];
  return book ? book : new Error(`There is no book with id ${id}`);
};

const authorIdFromBook = (book) => {
  const { author } = book;
  return author
    ? author
    : new Error(`Book ${book.id? `with id ${book.id} `: ''}is missing an author`)
  ;
};

const authorFromId = (id) => {
  const author = data.authors[id];
  return author
    ? author
    : new Error(`There is no author with id ${id}`)
  ;
};

const penName = (author) => {
  const { penName } = author;
  return penName
    ? penName
    : new Error(`Author ${author.id ? `with id ${author.id} `: ''}is missing a pen name`)
  ;
};

const main = pipe(
  either,
  map(bookFromId),
  map(authorIdFromBook),
  map(authorFromId),
  map(penName),
  unwrap,
);

// Here '->' always means 'returns', never 'throws'
main(1); // -> Miguel de Cervantes
main(2); // -> Error: Author with id 2 is missing a pen name
main(3); // -> Error: There is no author with id 3
main(4); // -> Error: Book with id 4 is missing an author
main(5); // -> Error: There is no book with id 5

```
