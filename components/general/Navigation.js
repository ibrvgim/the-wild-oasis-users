import { auth } from '@/authentication/auth';
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';

async function Navigation() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <NavLink href='/cabins'>Cabins</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/account'>Guest Area</NavLink>
        </li>

        {user?.name && user?.image && (
          <li>
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
