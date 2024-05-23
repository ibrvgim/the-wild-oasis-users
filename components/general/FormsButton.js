'use client';

import { useFormStatus } from 'react-dom';

function FormsButton({ loadingText, buttonText }) {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-accent-500 px-8 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
      disabled={pending}
    >
      {pending ? loadingText : buttonText}
    </button>
  );
}

export default FormsButton;
