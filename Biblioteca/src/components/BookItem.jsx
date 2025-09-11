import React from 'react';
import { useLibrary } from '../hooks/useLibrary';

const BookItem = ({ book }) => {
  const { removeBook, toggleReadStatus } = useLibrary();

  const handleToggle = () => {
    toggleReadStatus(book.id);
  };

  const handleRemove = () => {
    removeBook(book.id);
  };

  return (
    <li className={`book-item ${book.isRead ? 'read' : ''}`}>
      <div>
        <h4>{book.title}</h4>
        <p>by {book.author}</p>
      </div>
      <div>
        <button onClick={handleToggle}>
          {book.isRead ? 'No leído' : 'Marcar como leído'}
        </button>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </li>
  );
};

export default BookItem;