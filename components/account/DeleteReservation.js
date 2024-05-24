'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';

function DeleteReservation({ bookingId, handleDelete }) {
  return (
    <button
      className='group flex items-center gap-2 text-sm font-medium text-primary-300 flex-grow px-3 transition-colors hover:text-red-500'
      onClick={() => handleDelete(bookingId)}
    >
      <XMarkIcon className='h-5 w-5 text-primary-600 group-hover:text-red-500 transition-colors' />
      <span className='mt-1'>Cancel</span>
    </button>
  );
}

export default DeleteReservation;
