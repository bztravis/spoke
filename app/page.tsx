import Link from 'next/link';
import WordmarkMd from '@/public/icons/wordmarkMd.svg';
import IconL from '@/public/icons/iconL.svg';

export const metadata = {
  title: 'Spoke: Understand, engage, and connect your audience',
};

export default function LandingPage() {
  return (
    <div>
      <nav className='flex flex-row justify-center items-center px-6 md:px-12 h-28'>
        <div className='w-full max-w-screen-2xl flex flex-row justify-between items-center text-md'>
          <WordmarkMd />
          <div className='flex flex-row items-center gap-6 md:gap-8'>
            <Link href='/pricing' className='hidden md:block'>
              Features
            </Link>
            <Link href='/pricing' className='hidden md:block'>
              Pricing
            </Link>
            <button className='px-6 py-2 rounded bg-gray-200 font-medium'>
              Sign In
            </button>
          </div>
        </div>
      </nav>
      <main>
        <div className='flex flex-col justify-center items-center gap-24 h-[450px] md:h-[640px] text-xl'>
          <div className='flex flex-col items-center gap-8 px-4 md:px-8'>
            <h1 className='max-w-[960px] text-center text-4xl lg:text-7xl font-semibold tracking-tight'>
              Understand, engage, and connect your audience.
            </h1>
            <p className='text-gray-500 text-center'>
              Track attendance, pose live polls, and host live chat for
              participants
            </p>
          </div>
          <div className='flex flex-col gap-8 items-center'>
            <div className='flex flex-row gap-2 p-2 md:w-[500px] h-20 border-2 border-gray-200 rounded'>
              <input
                type='text'
                placeholder='Enter your event code'
                className='p-2 grow bg-transparent focus:outline-none'
              />
              <button className='px-8 py-2 rounded bg-tangerine500 font-medium'>
                Join
              </button>
            </div>
            <span className='flex gap-4 text-xl'>
              <p className='inline'>Organizing an event?</p>
              <Link href='/signin' className='underline text-gray-500'>
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
