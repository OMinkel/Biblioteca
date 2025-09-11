import { createContext, useReducer } from 'react';

// Crear el contexto
export const LibraryContext = createContext();

// Estado inicial con datos de ejemplo
const initialState = {
  books: [
    { id: 1, title: 'El Quijote', author: 'Cervantes', isRead: false },
    { id: 2, title: '1984', author: 'George Orwell', isRead: true }
  ],
  filter: 'all', // Opciones: 'all', 'read', 'unread'
};

// Reducer para manejar las acciones
const libraryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: Date.now() }]
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case 'TOGGLE_READ_STATUS':
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload ? { ...book, isRead: !book.isRead } : book
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

// Provider del contexto
export const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(libraryReducer, initialState);

  // Funciones para las acciones
  const addBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };
  const removeBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };
  const toggleReadStatus = (id) => {
    dispatch({ type: 'TOGGLE_READ_STATUS', payload: id });
  };
  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const value = {
    ...state,
    addBook,
    removeBook,
    toggleReadStatus,
    setFilter,
    // La lista de libros filtrada para evitar cálculos en los componentes
    filteredBooks: state.books.filter(book => {
      if (state.filter === 'read') return book.isRead;
      if (state.filter === 'unread') return !book.isRead;
      return true;
    }),
    // Estadísticas
    totalBooks: state.books.length,
    readBooks: state.books.filter(book => book.isRead).length,
    unreadBooks: state.books.filter(book => !book.isRead).length,
  };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
};