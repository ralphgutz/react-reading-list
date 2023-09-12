import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const Wrapper: React.FC = () => {
  interface Book {
    title: string;
    author: string;
  }

  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    const newBook: Book = { ...book };
    setBooks([...books, newBook]);
  };

  const deleteBook = (bookToDelete: Book) => {
    const updatedBooks = books.filter((book) => book.title !== bookToDelete.title);
    setBooks(updatedBooks);
  };

  return (
    <div className='Wrapper'>
      <div className='bg-blue-500 p-4 mb-5'>
        <h1 className='text-2xl text-white'>My Reading List</h1>
      </div>
      <div className=''>
        <div className='flex justify-center items-center'>
          <div className='flex-col'>
            {books.map((book, index) => (
              <Card book={book} key={index} deleteBook={() => deleteBook(book)}  />
            ))
            }
          </div>
        </div>  
        <Form addBook={addBook}/>
      </div>
      
    </div>
  );
}

export default Wrapper;