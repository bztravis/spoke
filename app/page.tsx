import Link from 'next/link';
import WordmarkMd from '@/public/icons/wordmarkMd.svg';

export const metadata = {
  title: 'Spoke: Understand, engage, and connect your audience',
};

export default function LandingPage() {
  return (
    <main>
      <nav className='flex flex-row justify-center items-center px-6 md:px-12 h-24'>
        <div className='w-full max-w-screen-2xl flex flex-row justify-between items-center bg-slate-400 text-lg'>
          <div className=''>
            <WordmarkMd />
          </div>

          <div className='flex flex-row items-center gap-4 md:gap-12'>
            <Link href='/pricing'>Join</Link>
            <Link href='/pricing'>Pricing</Link>
            <button className='px-8 py-2 rounded bg-tangerine500 font-medium'>
              Sign In
            </button>
          </div>
        </div>
      </nav>
      Welcome to Spoke
    </main>
  );
}
