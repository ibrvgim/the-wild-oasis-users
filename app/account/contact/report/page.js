import Link from 'next/link';

export default function SuccesMessagePage() {
  return (
    <div className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>Thank you for contacting us!</h1>
      <p>
        We will get back to you as soon as possible. You will receive a response
        via the email address you provided in the form.
      </p>
      <Link
        href='/account/contact'
        className='inline-block bg-transparent border-accent-500 border-[1px] border-solid text-primary-100 px-6 py-3 text-lg rounded-md'
      >
        Go Back
      </Link>
    </div>
  );
}
