'use client';

import { deleteReservation } from '@/actions/reservationActions';
import ReservationCard from './ReservaitonsCard';
import { useOptimistic } from 'react';

function ReservationsList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className='space-y-6'>
      {optimisticBookings?.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationsList;
