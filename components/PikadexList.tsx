import PikacloneCard from "./PikacloneCard";
import Link from "next/link";

type Pikaclone = {
  id: string;
  name: string;
  text: string;
};

type PikadexListProps = {
  pikaclones: Pikaclone[];
};


export default function PikadexList({pikaclones}: PikadexListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-sm md:max-w-3xl py-24">
      {pikaclones.map((pikaclone) => (
        <Link key={pikaclone.id} href={`/pikadex/${pikaclone.id}`}>
          <PikacloneCard pikaclone={pikaclone} />
        </Link>
      ))}
    </div>
    

  );
}