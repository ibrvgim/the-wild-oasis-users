import LoaderIndicator from './LoaderIndicator';

function SuspenseLoader({ placeholder }) {
  return (
    <div className='h-full flex flex-col items-center mt-[5rem]'>
      <LoaderIndicator />
      <p className='mt-5'>{placeholder}</p>
    </div>
  );
}

export default SuspenseLoader;
