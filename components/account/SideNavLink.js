'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNavLink({ children, href }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
        isActive ? 'bg-primary-900' : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default SideNavLink;
