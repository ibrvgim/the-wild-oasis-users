import CabinsList from '@/components/cabins/CabinsList';
import Filter from '@/components/cabins/Filter';
import ReservationReminder from '@/components/cabins/ReservationReminder';
import SuspenseLoader from '@/components/general/SuspenseLoader';
import { Suspense } from 'react';

export const metadata = {
  title: 'Cabins',
};

function CabinsPage({ searchParams }) {
  const filter = searchParams?.capacity || 'all';

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Filter />

      <Suspense
        fallback={<SuspenseLoader placeholder='loading cabins...' />}
        key={filter}
      >
        <CabinsList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default CabinsPage;
