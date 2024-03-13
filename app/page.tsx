import Link from 'next/link';
import WordmarkMd from '@/public/icons/wordmarkMd.svg';

export const metadata = {
  title: 'Spoke: Understand, engage, and connect your audience',
};

export default function LandingPage() {
  return (
    <div>
      <nav className='flex flex-row justify-center items-center px-6 md:px-12 h-24'>
        <div className='w-full max-w-screen-2xl flex flex-row justify-between items-center bg-slate-400 text-lg'>
          <WordmarkMd />
          <div className='flex flex-row items-center gap-4 md:gap-12'>
            <Link href='/pricing'>Join</Link>
            <Link href='/pricing'>Pricing</Link>
            <button className='px-8 py-2 rounded bg-tangerine500 font-medium'>
              Sign In
            </button>
          </div>
        </div>
      </nav>
      <main>
        <div className='flex flex-col justify-center items-center gap-24 h-[640px] text-lg'>
          <h1 className='max-w-[960px] text-center text-7xl font-semibold tracking-tight'>
            Understand, engage, and connect your audience.
          </h1>
          <div className='flex flex-col gap-8 items-center'>
            <div className='flex flex-row gap-2 p-2 w-[500px] h-20 border rounded bg-gray-200'>
              <input
                type='text'
                placeholder='Enter your event code'
                className='p-2 grow'
              />
              <button className='px-8 py-2 rounded bg-tangerine500 font-medium'>
                Join
              </button>
            </div>
            <span className='flex gap-4'>
              <p className='inline'>Organizing an event?</p>
              <Link href='/signin' className='underline'>
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
