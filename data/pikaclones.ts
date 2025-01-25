export type Pikaclone = {
  id: string; // Use lowercase string
  name: string;
  text: string;
};

const pikaclones: Pikaclone[] = [
  {
    id: "25",
    name: "Pikachu",
    text: "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
  },
  {
    id: "172",
    name: "Pichu",
    text: "It still can’t use electricity well. When it’s surprised or excited, it discharges electricity unintentionally.",
  },
  {
    id: "311",
    name: "Plusle",
    text: "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
  },
  {
    id: "312",
    name: "Minun",
    text: "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
  },
  {
    id: "417",
    name: "Pachirisu",
    text: "It stores its own fur balls that crackle with static electricity together with its favorite berries in tree hollows.",
  },
  {
    id: "587",
    name: "Emolga",
    text: "They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
  },
  {
    id: "702",
    name: "Dedenne",
    text: "Since Dedenne can't generate much electricity on its own, it steals electricity from outlets or other electric Pokémon.",
  },
  {
    id: "777",
    name: "Togedemaru",
    text: "When it’s surprised or agitated, the 14 fur spikes on its back will stand up involuntarily.",
  },
  {
    id: "778",
    name: "Mimikyu",
    text: "There will be no forgiveness for any who reveal that it was pretending to be Pikachu. It will bring the culprit down, even at the cost of its own life.",
  },
  {
    id: "877",
    name: "Morpeko",
    text: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity.",
  },
  {
    id: "921",
    name: "Pawmi",
    text: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
  },
  {
    id: "922",
    name: "Pawmo",
    text: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
  },
  {
    id: "923",
    name: "Pawmot",
    text: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
  },
];

export const getAllPikaclones = (): Pikaclone[] => {
  return pikaclones;
};

export function getPikaclone(id: string): Pikaclone | undefined {
  const pikaclone = pikaclones.find((pikaclone) => pikaclone.id === id);
  if (!pikaclone) {
    console.error(`Pikaclone with ID ${id} not found`);
  }
  return pikaclone;
}
