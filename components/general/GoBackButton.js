'use client';

import { useRouter } from 'next/navigation';

function GoBackButton() {
  const route = useRouter();

  return (
    <button
      className='mb-[3.5rem] text-primary-500 hover:text-accent-500 transition-colors tracking-wider'
      onClick={() => route.back()}
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
