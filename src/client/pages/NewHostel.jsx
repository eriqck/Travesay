import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createHostel from '@wasp/actions/createHostel';

export function NewHostel() {
  const createHostelFn = useAction(createHostel);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleCreateHostel = () => {
    createHostelFn({ name, location, description, price });
    setName('');
    setLocation('');
    setDescription('');
    setPrice(0);
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Name'
        className='px-1 py-2 border rounded text-lg'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Location'
        className='px-1 py-2 border rounded text-lg'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type='text'
        placeholder='Description'
        className='px-1 py-2 border rounded text-lg'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='number'
        placeholder='Price'
        className='px-1 py-2 border rounded text-lg'
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button
        onClick={handleCreateHostel}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Hostel
      </button>
      <Link to='/' className='text-blue-500 hover:underline'>Go back to Dashboard</Link>
    </div>
  );
}