import { auth } from '@/authentication/auth';
import SignInButton from '@/components/account/SigninButton';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Login',
};

async function LoginPage() {
  const session = await auth();
  if (session) redirect('/');

  return (
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h2 className='text-3xl font-semibold'>
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}

export default LoginPage;
