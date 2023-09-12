import React from 'react';

interface Book {
  title: string;
  author: string;
}

interface CardProps {
  book: Book;
  deleteBook: (book: Book) => void;
}

const Card: React.FC<CardProps> = ({ book, deleteBook }) => {
  return (
    <div className='Card w-64 mb-2'>
      <div className='block bg-orange-100 py-3 px-5  text-left rounded-md'>
        <h1 className='text-gray-900 text-2xl font-semibold'>{book.title}</h1>
        <p className='text-orange-400 font-semibold'>{book.author}</p>
        <button onClick={() => deleteBook(book)}>X</button>
      </div>
    </div>
  );
}

export default Card;