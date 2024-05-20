import Image from 'next/image';
import { getCabin, getCabins } from '@/libraries/data-service';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const id = params.slugCabin;
  const cabin = await getCabin(id);

  if (!cabin) return null;

  return {
    title: `Cabin ${cabin.name}`,
  };
}

export const revalidate = 3600;

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

  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
        <div className='scale-[1.15] -translate-x-3 relative'>
          <Image
            src={image}
            alt={`Cabin ${name}`}
            className='object-cover'
            fill
          />
        </div>

        <div>
          <div className='flex items-center'>
            <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
              Cabin {name}
            </h3>

            <span className='text-[2.6rem] font-[600] text-primary-400'>
              ${discount ? regularPrice - discount : regularPrice}
            </span>
          </div>

          <p className='text-lg text-primary-300 mb-10'>{description}</p>

          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <UsersIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                For up to <span className='font-bold'>{maxCapacity}</span>{' '}
                guests
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <MapPinIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Located in the heart of the{' '}
                <span className='font-bold'>Dolomites</span> (Italy)
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <EyeSlashIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Privacy <span className='font-bold'>100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className='text-5xl font-semibold text-center'>
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
