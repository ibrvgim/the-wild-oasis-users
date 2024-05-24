import { auth } from '@/authentication/auth';
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';

async function Navigation() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className='text-lg sm:text-xl'>
      <ul className='flex gap-8 items-center lg:gap-16 sm:gap-12'>
        <li>
          <NavLink href='/cabins'>Cabins</NavLink>
        </li>
        <li className='hidden sm:inline-block'>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/account'>Guest Area</NavLink>
        </li>

        {user?.name && user?.image && (
          <li className='hidden lg:inline-block'>
            <Link href='/account' className='flex items-center gap-4'>
              <Image
                src={user.image}
                alt='user photo'
                referrerPolicy='no-referrer'
                className='rounded-[50rem]'
                width={40}
                height={40}
              />
              <p className='text-base hover:text-accent-500 transition-colors'>
                {user.name}
              </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
