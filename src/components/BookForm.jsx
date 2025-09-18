import React, { useState } from 'react';
import { useLibrary } from '../hooks/useLibrary';

const BookForm = () => {
  const { addBook } = useLibrary();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('Por favor, ingresa el título y el autor del libro.');
      return;
    }
    const newBook = {
      title,
      author,
      isRead: false,
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h3>Agregar Nuevo Libro</h3>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default BookForm;