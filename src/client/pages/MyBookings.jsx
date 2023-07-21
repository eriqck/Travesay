import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getBookings from '@wasp/queries/getBookings';

export function MyBookings() {
  const { data: bookings, isLoading, error } = useQuery(getBookings);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.hostel.name}</p>
          <p>{booking.startDate} - {booking.endDate}</p>
          <Link to={`/hostel/${booking.hostel.id}`}>View Hostel</Link>
        </div>
      ))}
    </div>
  );
}