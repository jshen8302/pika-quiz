'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter(); // Next.js router for programmatic navigation

  return (
    <nav className="flex bg-navColor w-full min-h-20 md:min-h-20 px-6 text-black fixed">
      <div className="flex flex-1 items-center">
        <Image
          src="/binary.jpeg"
          width={50}
          height={50}
          className="object-cover rounded-full"
          alt="Logo"
        />
      </div>
      <div className="flex flex-1 items-center justify-center gap-10 md:gap-20 text-2xl md:text-3xl">
        <button
          className="text-black"
          onClick={() => router.push('/')} // Navigate to Home
        >
          Home
        </button>
        <button
          className="text-black"
          onClick={() => router.push('/pikadex')} // Navigate to Pikadex
        >
          Pikadex
        </button>
        <button
          className="text-black"
          onClick={() => router.push('/notes')} // Navigate to Notes
        >
          Notes
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center"></div>
    </nav>
  );
}
