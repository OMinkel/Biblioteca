import React from 'react';
import { useLibrary } from '../hooks/useLibrary';
import BookItem from './BookItem';

const BookList = () => {
  const { filteredBooks, filter } = useLibrary();

  if (filteredBooks.length === 0) {
    return <p>No hay libros para mostrar con el filtro actual.</p>;
  }

  return (
    <ul className="book-list">
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;