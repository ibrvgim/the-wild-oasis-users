'use client';

import { useRouter, useSearchParams } from 'next/navigation';

function Filter() {
  return (
    <div className='border border-primary-800 flex sm:justify-between'>
      <Button filter='all'>All cabins</Button>

      <Button filter='small'>
        <span className='hidden md:inline-block'>Small cabins</span> ( 1 &mdash;
        3 guests )
      </Button>

      <Button filter='medium'>
        <span className='hidden md:inline-block'>Medium cabins</span> ( 4
        &mdash; 7 guests )
      </Button>

      <Button filter='large'>
        <span className='hidden md:inline-block'>Large cabins</span> ( 8 &mdash;
        10 guests )
      </Button>
    </div>
  );
}

function Button({ children, filter }) {
  const route = useRouter();
  const searchParams = useSearchParams();
  let currentFilter = searchParams.get('capacity') || 'all';

  function handleRoute(filter) {
    route.push(filter, { scroll: false });
  }
  return (
    <button
      className={`flex-1 px-5 py-2 hover:bg-primary-700 ${
        currentFilter === filter
          ? 'bg-primary-500 text-white hover:bg-primary-500'
          : ''
      }`}
      onClick={() => handleRoute(`/cabins/?capacity=${filter}`)}
    >
      {children}
    </button>
  );
}

export default Filter;
