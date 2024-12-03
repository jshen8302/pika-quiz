import Navbar from '@/app/ui/navbar';
import { VT323 } from 'next/font/google';
import clsx from 'clsx';
import styles from '@/app/ui/home.module.css';
import "./globals.css";



const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={clsx(vt323.className, "flex h-screen flex-col bg-red-500")}>
          <Navbar/>
          <div className="flex flex-col flex-1 pb-24 max-w-3xl m-auto">
            {children}

          </div>
        

        </div>

       
  


      </body>

    </html>
  );
}
