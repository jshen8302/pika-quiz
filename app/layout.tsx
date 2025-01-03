'use client';

import Navbar from '@/app/ui/navbar';
import { VT323 } from 'next/font/google';
import './globals.css';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={vt323.className} lang="en" suppressHydrationWarning>
      <body>

        <div  className="flex h-screen flex-col bg-red-500">
          <Navbar />
          <div className="bg-pageColor flex flex-col flex-1 text-black">
            {children}
          </div>
        </div>


      </body>
    </html>
  );
}
