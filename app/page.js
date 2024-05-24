import Image from 'next/image';
import bgImage from '@/public/bg.png';
import Link from 'next/link';

function HomePage() {
  return (
    <main className='mt-24'>
      <Image
        src={bgImage}
        placeholder='blur'
        quality={80}
        className='object-cover object-top'
        alt='Mountains and forests with two cabins'
        fill
        draggable={false}
      />

      <div className='relative z-10 text-center'>
        <h1 className='text-6xl text-primary-50 mb-10 tracking-tight font-normal sm:text-8xl'>
          Welcome to paradise.
        </h1>
        <Link
          href='/cabins'
          className='hidden bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all sm:inline-block'
        >
          Explore luxury cabins
        </Link>

        <Link
          href='/cabins'
          className='bg-accent-500 px-6 py-4 rounded text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all inline-block sm:hidden'
        >
          Explore cabins
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
