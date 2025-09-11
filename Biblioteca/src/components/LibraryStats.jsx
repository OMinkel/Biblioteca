import React from 'react';
import { useLibrary } from '../hooks/useLibrary';

const LibraryStats = () => {
  const { totalBooks, readBooks, unreadBooks, setFilter, filter } = useLibrary();

  return (
    <div className="library-stats">
      <h3>Estadísticas de la Biblioteca</h3>
      <p>Total de libros: {totalBooks}</p>
      <p>Libros leídos: {readBooks}</p>
      <p>Libros pendientes: {unreadBooks}</p>
      
      <div className="filters">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter('read')}
          className={filter === 'read' ? 'active' : ''}
        >
          Leídos
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={filter === 'unread' ? 'active' : ''}
        >
          No leídos
        </button>
      </div>
    </div>
  );
};

export default LibraryStats;