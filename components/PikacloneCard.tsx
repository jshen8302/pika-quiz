import Image from 'next/image';

type Pikaclone = {
  id: string;
  name: string;
  text: string;
};

type PikacloneCardProps = {
  pikaclone: Pikaclone;
};

export default function PikacloneCard({pikaclone}: PikacloneCardProps) {
  const renderCardById = () => {
    switch(pikaclone.id) {
      case "25":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pikachu-card-4.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Pikachu Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "172":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pichu-card-3.jpg"
                width={320}
                height={208}
                className="object-cover"
                alt="Pichu Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "311":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/plusle-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Plusle Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "312":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/minun-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Minun Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "417":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pachirisu-card-3.jpg"
                width={320}
                height={208}
                className="object-cover"
                alt="Pachirisu Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "587":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/emolga-card.jpg"
                width={320}
                height={208}
                className="object-cover"
                alt="Emolga Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "702":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/dedenne-card.webp"
                width={320}
                height={208}
                className="object-cover"
                alt="Dedenne Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "777":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/togedemaru-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Togedemaru Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "778":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/mimikyu-card.webp"
                width={320}
                height={208}
                className="object-cover"
                alt="Mimikyu Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "877":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/morpeko-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Morpeko Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "921":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pawmi-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Pawmi Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "922":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pawmo-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Pawmo Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
      case "923":
        return (
          <>
            <div className="flex flex-1 bg-orange-600 overflow-hidden">
              <Image
                src="/pawmot-card.png"
                width={320}
                height={208}
                className="object-cover"
                alt="Pawmot Dex Card"
              />
            </div>
            <div className="flex items-center px-4 gap-2 py-2">
              <div>
                #{pikaclone.id}
              </div>
              <div>
                {pikaclone.name}
              </div>
            </div>
          </>
        );
 


        
     

    }
  }
  return (
    <div className="flex flex-col text-2xl bg-orange-400 rounded-3xl overflow-hidden h-56 w-64 hover:scale-105">
      {renderCardById()}
    </div>
  );
}

