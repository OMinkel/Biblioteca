import React from 'react';
import { LibraryProvider } from './contexts/LibraryContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import LibraryStats from './components/LibraryStats';
import './styles/App.css';

function App() {
  return (
    <LibraryProvider>
      <div className="app-container">
        <h1>Mi Biblioteca Digital</h1>
        <div className="library-content">
          <div className="left-panel">
            <BookForm />
            <LibraryStats />
          </div>
          <div className="right-panel">
            <h2>Lista de Libros</h2>
            <BookList />
          </div>
        </div>
      </div>
    </LibraryProvider>
  );
}

export default App;