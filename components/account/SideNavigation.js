import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';

import SignOutButton from './SignoutButton';
import SideNavLink from './SideNavLink';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Guest Profile',
    href: '/account/profile',
    icon: <UserIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Contact Us',
    href: '/account/contact',
    icon: <PhoneIcon className='h-5 w-5 text-primary-600' />,
  },
];

function SideNavigation() {
  return (
    <nav className='border-r border-primary-900'>
      <ul className='flex flex-col gap-2 h-full text-lg'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <SideNavLink href={link.href}>
              {link.icon}
              <span>{link.name}</span>
            </SideNavLink>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
