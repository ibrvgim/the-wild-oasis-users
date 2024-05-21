'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ children, href }) {
  const path = usePathname();
  const isActive = path.includes(href);

  return (
    <Link
      href={href}
      className={`hover:text-accent-500 transition-colors ${
        isActive ? 'text-accent-500' : ''
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
