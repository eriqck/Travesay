import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getHostels from '@wasp/queries/getHostels';

export function DashboardPage() {
  const { data: hostels, isLoading, error } = useQuery(getHostels);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Hostels</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {hostels.map((hostel) => (
          <div
            key={hostel.id}
            className='bg-white p-4 rounded-lg shadow-md'
          >
            <h2 className='text-xl font-bold mb-2'>{hostel.name}</h2>
            <p className='text-gray-600 mb-2'>{hostel.location}</p>
            <p className='text-gray-600 mb-2'>{hostel.description}</p>
            <p className='text-gray-600 mb-2'>Price: ${hostel.price}</p>
            <Link to={`/hostel/${hostel.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}