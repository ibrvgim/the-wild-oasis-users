import { getCabins } from '@/libraries/data-service';
import CabinCard from './CabinCard';

async function CabinsList({ filter }) {
  const cabins = await getCabins();
  let displayedCabins = cabins;

  if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );

  if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <>
      {displayedCabins.length > 0 && (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinsList;