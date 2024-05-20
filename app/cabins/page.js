import CabinCard from '@/components/cabins/CabinCard';
import LoaderIndicator from '@/components/general/LoaderIndicator';
import { getCabins } from '@/libraries/data-service';
import { Suspense } from 'react';

export const metadata = {
  title: 'Cabins',
};

export const revalidate = 3600;

async function CabinsPage() {
  const cabins = await getCabins();

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

      <Suspense
        fallback={
          <div className='h-full flex flex-col items-center mt-[8rem]'>
            <LoaderIndicator />
            <p className='mt-5'>loading cabins...</p>
          </div>
        }
      >
        {cabins.length > 0 && (
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
            {cabins.map((cabin) => (
              <CabinCard cabin={cabin} key={cabin.id} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default CabinsPage;
