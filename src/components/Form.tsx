import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState("");

  return (
    <div className='Form flex justify-center items-center'>
      <form action='' className='w-64'>
        <div className='my-3'>
          <input type='text' className='w-full text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight' placeholder='Book Title' onChange={(e) => console.log(e.target.value)} />
        </div>
        <div className='my-3'>
          <input type='text' className='w-full text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight' placeholder='Author' />
        </div>
        <div className='my-3 text-left'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full'>Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;