import { editReservation } from '@/actions/reservationActions';
import CustomCheckbox from '@/components/general/CustomCheckbox';
import FormsButton from '@/components/general/FormsButton';
import GoBackButton from '@/components/general/GoBackButton';
import { getBooking, getCabin, getSettings } from '@/libraries/data-service';

export default async function EditReservationPage({ params }) {
  const reservationId = params.slugEdit;
  const booking = await getBooking(reservationId);
  const [cabin, settings] = await Promise.all([
    getCabin(booking.cabinId),
    getSettings(),
  ]);

  return (
    <div>
      <GoBackButton />
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Edit Reservation #{reservationId}
      </h2>

      <form
        className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
        action={editReservation}
      >
        <input
          name='reservationId'
          value={reservationId}
          type='hidden'
          hidden
          readOnly
        />
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
            defaultValue={booking.numGuests}
          >
            <option value='' key='' className='hidden'>
              Select number of guests...
            </option>
            {Array.from({ length: cabin?.maxCapacity }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? 'guest' : 'guests'}
                </option>
              )
            )}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any special requirements?'
            defaultValue={booking?.observations}
          />
        </div>

        <CustomCheckbox defaultValue={booking.hasBreakfast}>
          include breakfast ( {settings.breakfastPrice}$ )
        </CustomCheckbox>

        <div className='flex justify-end items-center mt-[0.5rem]'>
          <FormsButton
            loadingText='updating...'
            buttonText='Update reservation'
          />
        </div>
      </form>
    </div>
  );
}
