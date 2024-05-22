'use client';

import { updateProfile } from '@/actions/userFormAction';
import { useFormState } from 'react-dom';
import FormButton from './FormButton';

function ProfileForm({ children, user }) {
  const { fullName, email, nationalID } = user;
  const [state, formAction] = useFormState(updateProfile, {});

  return (
    <form
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
      action={formAction}
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          type='text'
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={fullName}
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          type='email'
          disabled
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={email}
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from? </label>
        </div>

        {children}
        {state?.nationality && (
          <span className='float-right text-sm text-red-500'>
            {state.nationality}
          </span>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          name='nationalID'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultValue={nationalID || ''}
        />
        {state?.nationalID && (
          <span className='float-right text-sm text-red-500'>
            {state.nationalID}
          </span>
        )}
      </div>

      <div className='flex justify-end items-center gap-6'>
        <FormButton />
      </div>
    </form>
  );
}

export default ProfileForm;
