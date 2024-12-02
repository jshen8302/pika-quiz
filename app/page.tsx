import styles from '@/app/ui/home.module.css';
import Image from 'next/image';


export default function Page() {
  return (
    <main className={styles.customMain}>
      <div className={styles.pikaQuizTitle}>
        Pika-Clone Quiz

      </div>
      <div className={styles.whichPikaClone}>
        Which Pika-Clone are you?

      </div>
      <div className={styles.heroBanner}>
      <Image 
        src="/pika-gang.png"
        width={677}
        height={198}
        className={`hidden md:block ${styles.heroImage}`} 
        alt="Screenshots of the dashboard project showing desktop version"
      />


      </div>
      <div className={styles.startButton}>
        start

      </div>
     
    </main>
  );
}