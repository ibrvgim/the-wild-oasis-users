import { getBookedDatesByCabinId, getSettings } from '@/libraries/data-service';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import { auth } from '@/authentication/auth';
import LoginMessage from '../general/LoginMessage';

async function Reservation({ cabin }) {
  const session = await auth();
  const user = session?.user;
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className='grid grid-cols-2 border border-primary-800'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {user?.name ? (
        <ReservationForm
          cabin={cabin}
          user={user}
          breakfastPrice={settings.breakfastPrice}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
