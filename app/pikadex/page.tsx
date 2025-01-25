import PikadexList from '@/components/PikadexList';
import {getAllPikaclones} from '@/data/pikaclones';

export default function Page() {
  const pikaclones = getAllPikaclones();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <PikadexList pikaclones={pikaclones} />
    </div>

  );
}