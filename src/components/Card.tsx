import React from 'react';

interface Book {
  title: string;
  author: string;
}

interface CardProps {
  book: Book;
  deleteBook: (book: Book) => void;
}

export default function Card({book, deleteBook}: CardProps) {
  return (
    <>
      <div className='block bg-orange-100 py-3 px-5 w-64 mb-2 relative text-left rounded-md'>
        <h1 className='text-gray-900 text-2xl font-semibold'>{book.title}</h1>
        <p className='text-orange-400 font-semibold'>{book.author}</p>
        <button className='absolute top-0 right-0 h-10 w-6' onClick={() => deleteBook(book)}>
          <svg className='fill-gray-600' xmlns='http://www.w3.org/2000/svg' height='0.8em' viewBox='0 0 384 512'><path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z'/></svg>
        </button>
      </div>
    </>
  );
}