// hooks/useLibrary.js
import { useContext } from 'react';
import { LibraryContext } from '../contexts/LibraryContext';
export const useLibrary = () => {
 const context = useContext(LibraryContext);

 if (!context) {
 throw new Error('useLibrary debe ser usado dentro de LibraryProvider');
 }

 return context;
};
