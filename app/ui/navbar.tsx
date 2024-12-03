import styles from '@/app/ui/home.module.css';
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="flex bg-navColor w-full h-20 px-6">
      <div className="flex flex-1  items-center">
        <Image
          src="/binary.jpeg"
          width={50}
          height={50}
          className={` object-cover rounded-full`}
          alt="Screenshots of the dashboard project showing desktop version"
        />
        

      </div>
      <div className="flex flex-1 items-center justify-evenly text-3xl">
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
      <div className="flex flex-1 items-center justify-center">
        


      </div>
    </nav>

  );
}