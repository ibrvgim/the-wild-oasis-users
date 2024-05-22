import { auth } from '@/authentication/auth';
import ReservationsList from '@/components/account/ReservationsList';
import { getBookings } from '@/libraries/data-service';

export const metadata = {
  title: 'Reservations',
};

export default async function ReservationsPage() {
  const session = await auth();
  const bookings = await getBookings(session?.user.guestId);

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          You have no reservations yet. Check out our{' '}
          <a className='underline text-accent-500' href='/cabins'>
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationsList bookings={bookings} />
      )}
    </div>
  );
}
