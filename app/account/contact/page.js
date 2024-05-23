import { auth } from '@/authentication/auth';
import ContactForm from '@/components/account/ContactForm';

async function Contact() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <h1 className='text-4xl mb-8 text-accent-400 font-medium'>
        Any question? Get in touch with us!
      </h1>
      <ContactForm user={user} />
    </div>
  );
}

export default Contact;
