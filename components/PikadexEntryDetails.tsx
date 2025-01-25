import { getPikaclone } from "@/data/pikaclones"
import Image from 'next/image';

type PikadexEntryDetailsProps = {
  id: string;
    
}


const PikadexEntryDetails = ({id}: PikadexEntryDetailsProps) => {
  const pikaclone = getPikaclone(id);

  if (!pikaclone) {
    return <div className="text-8xl">Pokemon not found</div>
  }

  const renderImageById = () => {
    switch (pikaclone.id) {
      case "25":
        return (
          <Image
            src="/pikachu-card-4.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Pikachu Dex Card"
          />
        );
      case "172":
        return (
          <Image 
            src="/pichu-card-3.jpg"
            width={450}
            height={350}
            className="object-cover"
            alt="Pichu Dex Card"
          />
        )
      case "311":
        return (
          <Image
            src="/plusle-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Plusle Dex Card"
          />
        )
      case "312":
        return (
          <Image
            src="/minun-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Minun Dex Card"
          />
        )
      case "417":
        return (
          <Image
            src="/pachirisu-card-3.jpg"
            width={450}
            height={350}
            className="object-cover"
            alt="Pachirisu Dex Card"
          />
        )
      case "587":
        return (
          <Image
            src="/emolga-card.jpg"
            width={450}
            height={350}
            className="object-cover"
            alt="Emolga Dex Card"
          />
        )
      case "702":
        return (
          <Image
            src="/dedenne-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Dedenne Dex Card"
          />
        )
      case "777":
        return (
          <Image
            src="/togedemaru-card.png"
            width={450}
            height={350}
            className="object-cover scale-105"
            alt="Togedemaru Dex Card"
          />
        )
      case "778":
        return (
          <Image
            src="/mimikyu-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Mimikyu Dex Card"
          />
        )
      case "877":
        return (
          <Image
            src="/morpeko-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Morpeko Dex Card"
          />
        )
      case "921":
        return (
          <Image
            src="/pawmi-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Pawmi Dex Card"
          />
        )
      case "922":
        return (
          <Image
            src="/pawmo-card.png"
            width={450}
            height={350}
            className="object-cover"
            alt="Pawmo Dex Card"
          />
        )
      case "923":
        return (
          <Image
            src="/pawmot-card.jpeg"
            width={450}
            height={350}
            className="object-cover"
            alt="Pawmot Dex Card"
          />
        )
        
      
    }
    return (
      <div></div>
    )
  }


  return (

      <div className="flex flex-col w-64 md:w-96 md:h-60 rounded-3xl scale-125 overflow-hidden">
        <div className="flex bg-red-200 h-4/6">
          <div className="flex justfy-center w-2/3 overflow-hidden">
            {renderImageById()}
          </div>
          <div className="bg-[#D8F793] w-1/3">
            <p className="px-2 text-white bg-red-500">
              No. {pikaclone.id}
            </p>
            <p className="px-2">
              {pikaclone.name}
            </p>
            
        
          </div>

        </div>
        <div className="flex bg-[#A0CA92] h-1/3 ">
          <div className="px-4 py-3 text-sm ">
            {pikaclone.text}

          </div>
            
        </div>

      </div>
 



  );
}

export default PikadexEntryDetails;