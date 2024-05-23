'use client';

import { setContact } from '@/actions/contactActions';
import { useFormState } from 'react-dom';
import FormsButton from '../general/FormsButton';

function ContactForm({ user }) {
  const [state, formAction] = useFormState(setContact, {});

  return (
    <form
      className='bg-primary-900 py-10 px-14 text-lg space-y-6 max-w-5xl mx-auto'
      action={formAction}
    >
      <div className='space-y-2'>
        <label>
          Full Name{' '}
          {state?.fullName && (
            <span className='float-right text-[0.9rem] text-red-500'>
              {state.fullName}
            </span>
          )}
        </label>
        <input
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          name='fullName'
          defaultValue={user?.name}
        />
      </div>

      <div className='space-y-2'>
        <label>
          Email{' '}
          {state?.email && (
            <span className='float-right text-[0.9rem] text-red-500'>
              {state.email}
            </span>
          )}
        </label>
        <input
          type='email'
          name='email'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultValue={user?.email}
        />
      </div>

      <div className='space-y-2'>
        <label>
          Choose Subject{' '}
          {state?.subject && (
            <span className='float-right text-[0.9rem] text-red-500'>
              {state.subject}
            </span>
          )}
        </label>
        <select
          name='subject'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        >
          <option value='' hidden>
            Select topic
          </option>
          <option value='booking-information'>Booking Information</option>
          <option value='booking-problem'>Booking Problem</option>
          <option value='cabin-information'>Cabin Information</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div className='space-y-2'>
        <label>
          Message{' '}
          {state?.message && (
            <span className='float-right text-[0.9rem] text-red-500'>
              {state.message}
            </span>
          )}
        </label>
        <textarea
          name='message'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm placeholder:text-gray-500'
          rows={3}
          placeholder='Describe in detail how we can help you...'
        />
      </div>

      <div className='flex justify-between items-center text-red-500'>
        <FormsButton loadingText='sending...' buttonText='Send message' />
      </div>
    </form>
  );
}

export default ContactForm;
