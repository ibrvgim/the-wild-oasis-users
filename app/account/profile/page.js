import { auth } from '@/authentication/auth';
import ProfileForm from '@/components/account/ProfileForm';
import SelectCountry from '@/components/account/SelectCountry';
import { getGuest } from '@/libraries/data-service';

export const metadata = {
  title: 'Update Profile',
};

export default async function ProfilePage() {
  const session = await auth();
  const user = await getGuest(session?.user.email);

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-4'>
        Update your guest profile
      </h2>

      <p className='text-lg mb-8 text-primary-200'>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <ProfileForm user={user}>
        <SelectCountry
          name='nationality'
          id='nationality'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultCountry={user?.nationality}
        />
      </ProfileForm>
    </div>
  );
}
