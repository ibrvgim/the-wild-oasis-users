import CabinItem from '@/components/cabins/CabinItem';
import Reservation from '@/components/cabins/Reservation';
import GoBackButton from '@/components/general/GoBackButton';
import SuspenseLoader from '@/components/general/SuspenseLoader';
import { getCabin, getCabins } from '@/libraries/data-service';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const id = params.slugCabin;
  const cabin = await getCabin(id);
  if (!cabin) return null;

  return {
    title: `Cabin ${cabin.name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  return cabins.map((cabin) => ({
    slugCabin: String(cabin.id),
  }));
}

export default async function CabinDetailPage({ params }) {
  const id = params.slugCabin;
  const cabin = await getCabin(id);

  if (!cabin) {
    notFound();
  }

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <GoBackButton />
      <CabinItem cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-400'>
          Reserve Cabin {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense
          fallback={<SuspenseLoader placeholder='loading reservation...' />}
        >
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
