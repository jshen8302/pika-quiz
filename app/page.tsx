import styles from '@/app/ui/home.module.css';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex flex-col flex-grow justify-evenly">
      <div className="bg-green-500 flex justify-center items-center text-8xl">
        Pika-Clone Quiz

      </div>
      <div className="bg-blue-500 flex justify-center items-center text-5xl">
        Which Pika-Clone are you?

      </div>
      <div className="bg-orange-500 flex justify-center items-center">
      <Image 
        src="/pika-gang.png"
        width={677}
        height={198}
        className={`${styles.heroImage}`} 
        alt="Screenshots of the dashboard project showing desktop version"
      />


      </div>
      <div className="bg-purple-500 flex justify-center text-5xl">
        start

      </div>
     
    </main>
  );
}