import Link from 'next/link';

export default function SuccesPage() {
  return (
    <div className='text-center space-y-6 my-4'>
      <h1 className='text-3xl font-semibold'>
        Thank you for your reservation!
      </h1>
      <p className='tracking-wider'>
        We are delighted to inform you that your reservation at{' '}
        <span className='text-accent-500'>The Wild Oasis</span> has been
        successfully confirmed. We are thrilled to have the opportunity to host
        you and look forward to providing you with an exceptional stay.
      </p>

      <p className='tracking-wider'>
        We will send further details regarding your reservation, including
        check-in procedures, amenities, and any other relevant information, to
        the email address you provided us with. Please keep an eye on your inbox
        for this important information.
      </p>

      <p className='tracking-wider'>
        In the meantime, if you have any questions or special requests, do not
        hesitate to contact our{' '}
        <Link
          href='/account/contact'
          className='text-blue-400 hover:text-blue-500 transition-colors'
        >
          customer service
        </Link>{' '}
        team. We are here to ensure that your stay is as comfortable and
        enjoyable as possible.
      </p>

      <p className='tracking-wider'>
        Thank you for choosing us. We are committed to making your visit a
        memorable one and look forward to welcoming you soon.
      </p>
      <Link
        href='/account/reservations'
        className='underline text-xl text-accent-500 inline-block'
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
