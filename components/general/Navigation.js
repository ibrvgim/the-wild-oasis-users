import NavLink from './NavLink';

export default function Navigation() {
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
      </ul>
    </nav>
  );
}
