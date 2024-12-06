'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For Next.js 13 App Router

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-1 flex-col justify-center gap-10 max-w-sm md:max-w-3xl m-auto">
      <div className="flex justify-center items-center text-5xl md:text-7xl">
        Pika-Clone Quiz
      </div>
      <div className="flex justify-center items-center text-2xl md:text-4xl">
        Which Pika-Clone are you?
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/pika-gang.png"
          width={677}
          height={198}
          className="w-3/4 md:w-4/5"
          alt="Pika Gang"
        />
      </div>
      <div className="flex justify-center text-2xl md:text-4xl">
        <button onClick={() => router.push('/quiz')}>Start</button>
      </div>
    </main>
  );
}


