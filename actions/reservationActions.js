'use server';

import { auth } from '@/authentication/auth';
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
} from '@/libraries/data-service';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createReservation(bookingData, data) {
  const session = await auth();
  if (!session) throw new Error('You must login to your account.');

  const numGuests = data.get('numGuests');
  const observations = data.get('observations').slice(0, 1000);

  const newBooking = {
    ...bookingData,
    numGuests,
    observations,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    status: 'unconfirmed',
    isPaid: false,
    hasBreakfast: false,
  };

  createBooking(newBooking);
  revalidatePath('/account/reservations');
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect('/cabins/successfully-reserved');
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error('You must login to your account.');

  const guestBookings = await getBookings(session?.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => Number(booking.id));

  if (!guestBookingIds.includes(Number(bookingId)))
    throw new Error('You are not allowed to delete this booking.');

  deleteBooking(bookingId);
  revalidatePath('/account/reservations');
}

export async function editReservation(data) {
  const session = await auth();
  if (!session) throw new Error('You must login to your account.');

  const reservationId = data.get('reservationId');
  const numGuests = data.get('numGuests');
  const observations = data.get('observations').slice(0, 1000);

  const guestBookings = await getBookings(session?.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => Number(booking.id));

  if (!guestBookingIds.includes(Number(reservationId)))
    throw new Error('You are not allowed to edit this booking.');

  const updatedData = { numGuests, observations };

  updateBooking(reservationId, updatedData);
  revalidatePath('/account/reservations');
  revalidatePath(`/account/reservations/edit/${reservationId}`);
  redirect('/account/reservations');
}
