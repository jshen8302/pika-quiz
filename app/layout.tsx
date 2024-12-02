import Navbar from '@/app/ui/navbar';
import styles from '@/app/ui/home.module.css';
import { VT323 } from 'next/font/google';
import clsx from 'clsx';

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
    <html className={clsx(styles.customHTML)} lang="en">
      <body className={clsx(styles.customBody, vt323.className)}>
        <Navbar/>
        {children}

      </body>

    </html>
  );
}
