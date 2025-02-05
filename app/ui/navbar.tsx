'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const router = useRouter(); // Next.js router for programmatic navigation
  const pathname = usePathname();

  return (
    <nav className="z-20 flex bg-navColor w-full min-h-20 md:min-h-20 px-6 text-black fixed flex-shrink-0">
      <div className="flex flex-1 items-center">
        <Image
          src="/binary.jpeg"
          width={50}
          height={50}
          className="rounded-full flex w-50 h-50"
          alt="Logo"
        />
      </div>
      <div 
        className="flex flex-1 items-center justify-center gap-5 md:gap-20 text-2xl md:text-3xl">
        <button
          className={clsx(
            'text-black hover:text-gray-400 active:text-gray-500',
            {
              'text-red-400' : pathname === "/",
            },
          )}
          onClick={() => router.push('/')} // Navigate to Home
        >
          Home
        </button>
        <button
          className={clsx(
            'text-black hover:text-gray-400 active:text-gray-500',
            {
              'text-red-400' : pathname === '/pikadex',
            },
          )}
          onClick={() => router.push('/pikadex')} // Navigate to Pikadex
        >
          Pikadex
        </button>
        <button
          className={clsx(
            'text-black hover:text-gray-400 active:text-gray-500',
            { 'text-red-400' : pathname === '/notes' },
          )}
          onClick={() => router.push('/notes')} // Navigate to Notes
        >
          Notes
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center"></div>
    </nav>
  );
}
