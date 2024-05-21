import '@/styles/globals.css';

import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/general/Header';
import LoaderIndicator from '@/components/general/LoaderIndicator';
import { ReservationProvider } from '@/contexts/ReservationContext';

const font = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of Italy, surrounded by amazing mountains and forests.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
