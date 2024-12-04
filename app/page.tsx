import Image from 'next/image';


export default function Page() {
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
        className={"w-3/4 md:w-4/5"} 
        alt="Screenshots of the dashboard project showing desktop version"
      />


      </div>
      <div className="flex justify-center text-2xl md:text-4xl">
        start

      </div>
     
    </main>
  );
}