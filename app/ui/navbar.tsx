import styles from '@/app/ui/home.module.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className={styles.customNav}>
        <div className={styles.leftNav}>
          <Image
            src="/binary.jpeg"
            width={50}
            height={50}
            className={`hidden md:block ${styles.binaryImage}`}
            alt="Screenshots of the dashboard project showing desktop version"
          />
          

        </div>
        <div className={styles.midNav}>
          <Link href="/">
            Home
          </Link>
          <div>
            Pikadex
          </div>
          <Link href="/notes">
            Notes
          </Link>


        </div>
        <div className={styles.rightNav}>
  

        </div>
      </nav>
    </div>

  );
}