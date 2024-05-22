import { auth } from '@/authentication/auth';

export const metadata = {
  title: 'Account',
};

async function AccountPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <p className='text-accent-500'>Welcome, {user?.name}!</p>
    </div>
  );
}

export default AccountPage;
