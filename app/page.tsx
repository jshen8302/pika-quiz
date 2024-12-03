import styles from '@/app/ui/home.module.css';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex flex-1 flex-col justify-evenly pb-24 max-w-3xl m-auto">
      <div className="flex justify-center items-center text-8xl">
        Pika-Clone Quiz

      </div>
      <div className="flex justify-center items-center text-5xl">
        Which Pika-Clone are you?

      </div>
      <div className="flex justify-center items-center">
      <Image 
        src="/pika-gang.png"
        width={677}
        height={198}
        className={`${styles.heroImage}`} 
        alt="Screenshots of the dashboard project showing desktop version"
      />


      </div>
      <div className="flex justify-center text-5xl">
        start

      </div>
     
    </main>
  );
}