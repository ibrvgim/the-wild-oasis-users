'use client';

import { useRouter } from 'next/navigation';

function Error({ error, reset }) {
  const route = useRouter();

  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <div className='flex flex-col gap-3'>
        <button
          className='inline-block bg-transparent border-accent-500 border-[1px] border-solid text-primary-100 px-6 py-3 text-lg'
          onClick={reset}
        >
          Try again
        </button>

        <button
          className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
          onClick={() => route.back()}
        >
          Go Home
        </button>
      </div>
    </main>
  );
}

export default Error;
