// contexts/LibraryContext.js
import { createContext, useReducer } from 'react';
// Crear el contexto
export const LibraryContext = createContext();
// Estado inicial
const initialState = {
 books: [
 { id: 1, title: 'El Quijote', author: 'Cervantes', isRead: false },
 { id: 2, title: '1984', author: 'George Orwell', isRead: true }
 ],
 filter: 'all' // all, read, unread
};
// Reducer para manejar las acciones
const libraryReducer = (state, action) => {
 switch (action.type) {
 case 'ADD_BOOK':
 return {
 ...state,
 books: [...state.books, { ...action.payload, id: Date.now() }]
 };
 // Implementar más casos...
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
 // Más funciones...
 const value = {
 ...state,
 addBook,
 // más funciones...
 };
 return (
 <LibraryContext.Provider value={value}>
 {children}
 </LibraryContext.Provider>
 );
};