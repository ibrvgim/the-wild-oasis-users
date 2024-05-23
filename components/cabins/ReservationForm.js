'use client';

import { createReservation } from '@/actions/reservationActions';
import { useReservation } from '@/contexts/ReservationContext';
import { differenceInDays } from 'date-fns';
import Image from 'next/image';
import ReservationFormButton from './ReservationFormButton';
import CustomCheckbox from '../general/CustomCheckbox';

function ReservationForm({ cabin, user, breakfastPrice }) {
  const { range, resetRange } = useReservation();
  const { id, maxCapacity, regularPrice, discount } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    guestId: user.guestId,
    cabinId: id,
  };

  const createBookingWithData = createReservation.bind(null, bookingData);

  return (
    <div className='scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          {user.image && (
            <Image
              src={user.image}
              alt={`${user.name} photo`}
              referrerPolicy='no-referrer'
              className='rounded-full'
              width={25}
              height={25}
            />
          )}
          <p>Logged in as {user.name}</p>
        </div>
      </div>

      <form
        className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'
        action={(formData) => {
          createBookingWithData(formData);
          resetRange();
        }}
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key='' className='hidden'>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <CustomCheckbox>include breakfast ( {breakfastPrice}$ )</CustomCheckbox>

        <div className='flex justify-end items-center gap-6'>
          {!(startDate && endDate) ? (
            <p className='text-primary-300 text-base'>
              Start by selecting dates
            </p>
          ) : (
            <ReservationFormButton />
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
