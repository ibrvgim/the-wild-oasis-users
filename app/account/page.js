import { auth } from '@/authentication/auth';

export const metadata = {
  title: 'Account',
};

async function AccountPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <p className='text-accent-500 text-[2rem]'>Welcome, {user?.name}!</p>
      <p className='mt-[2rem] leading-[2rem]'>
        Discover the perfect retreat in our charming cabins, nestled in
        nature&apos;s embrace. Our user-friendly reservation page allows you to
        easily book your next getaway. Whether you&apos;re seeking a peaceful
        solo escape, a romantic weekend, or a fun-filled family adventure, we
        have the perfect cabin for you. Start planning your dream vacation with
        us today!
      </p>

      <p className='text-accent-500 text-[1.2rem] mt-[2rem]'>
        Manage Your Profile and Reservations
      </p>
      <p className='mt-[1rem] leading-[2rem]'>
        Stay in control of your vacation plans with our comprehensive profile
        and reservation management page. Here, you can enjoy the convenience of
        managing your vacation details all in one place, making your stay with{' '}
        <span className='text-accent-500'>The Wild Oasis</span> even more
        delightful and hassle-free.
      </p>
    </div>
  );
}

export default AccountPage;
