import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getHostels from '@wasp/queries/getHostels';
import createBooking from '@wasp/actions/createBooking';

export function Hostel() {
  const { hostelId } = useParams();
  const { data: hostels, isLoading, error } = useQuery(getHostels);
  const createBookingFn = useAction(createBooking);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateBooking = () => {
    createBookingFn({ hostelId, startDate, endDate });
    setStartDate('');
    setEndDate('');
  };

  const hostel = hostels.find((hostel) => hostel.id === Number(hostelId));

  if (!hostel) return 'Hostel not found';

  return (
    <div className='p-4'>
      <div className='flex gap-x-4 py-5'>
        <input
          type='date'
          className='px-1 py-2 border rounded text-lg'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type='date'
          className='px-1 py-2 border rounded text-lg'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          onClick={handleCreateBooking}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
        >
          Book
        </button>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>{hostel.name}</h2>
        <p>{hostel.location}</p>
        <p>{hostel.description}</p>
        <p>Price: ${hostel.price}</p>
        <Link to={`/hostel/${hostel.id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'>
          View Details
        </Link>
      </div>
    </div>
  );
}