import { title } from 'process';
import React, { useState } from 'react';

const Form = (): any => {
  interface Book {
    title: string;
    author: string;
  };

  const [book, setBook] = useState<Book>({ title: '', author: '' });

  const handleTitleChange = (e: React.ChangeEvent<any>) => {
    setBook({...book, title: e.target.value});
  }

  const handleAuthorChange = (e: React.ChangeEvent<any>) => {
    setBook({...book, author: e.target.value});
  }

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    console.log(book.author);
    console.log(book.title);

    setBook({title: '', author: ''});
  }

  return (
    <div className='Form flex justify-center items-center'>
      <form action='' className='w-64' onSubmit={handleSubmit}>
        <div className='my-3'>
          <input type='text' className='w-full text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight' placeholder='Book Title' value={book.title} onChange={handleTitleChange} />
        </div>
        <div className='my-3'>
          <input type='text' className='w-full text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight' placeholder='Author'  value={book.author} onChange={handleAuthorChange} />
        </div>
        <div className='my-3 text-left'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full'>Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;