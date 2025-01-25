'use client';

import Navbar from '@/app/ui/navbar';
import { VT323 } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400'
});

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}


export default function RootLayout({
  children, modal
}: RootLayoutProps) {
  return (
    <html className={vt323.className} lang="en">
      <body>

        <div  className={clsx(vt323.className, "flex h-screen flex-col bg-red-500")}>
          <Navbar />
          <div className="bg-pageColor flex flex-col flex-1 text-black">
            {children}
          </div>
        </div>
        {modal}
        <div id="modal-root-id"/>


      </body>
    </html>
  );
}
