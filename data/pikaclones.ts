export type Pikaclone = {
  id: string; // Use lowercase string
  name: string;
  type: string[];
  classification: string;
  height: string;
  weight: string;
  text: string;
};

const pikaclones: Pikaclone[] = [
  {
    id: "25",
    name: "Pikachu",
    type: ["Electric"],
    classification: "Mouse",
    height: "1'04\"",
    weight: "13.2lbs",
    text: "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
  },
  {
    id: "172",
    name: "Pichu",
    type: ["Electric"],
    classification: "Tiny Mouse",
    height: "1'00\"",
    weight: "4.4lbs",
    text: "It still can’t use electricity well. When it’s surprised or excited, it discharges electricity unintentionally.",
  },
  {
    id: "311",
    name: "Plusle",
    type: ["Electric"],
    classification: "Cheering",
    height: "1'04\"",
    weight: "9.3lbs",
    text: "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
  },
  {
    id: "312",
    name: "Minun",
    type: ["Electric"],
    classification: "Cheering",
    height: "1'04\"",
    weight: "9.3lbs",
    text: "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
  },
  {
    id: "417",
    name: "Pachirisu",
    type: ["Electric"],
    classification: "EleSquirrel",
    height: "1'04\"",
    weight: "8.6lbs",
    text: "It stores its own fur balls that crackle with static electricity together with its favorite berries in tree hollows.",
  },
  {
    id: "587",
    name: "Emolga",
    type: ["Electric", "Flying"],
    classification: "Sky Squirrel",
    height: "1'04\"",
    weight: "11.0lbs",
    text: "They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
  },
  {
    id: "702",
    name: "Dedenne",
    type: ["Electric","Fairy"],
    classification: "Antenna",
    height: "0'08\"",
    weight: "4.9lbs",
    text: "Since Dedenne can't generate much electricity on its own, it steals electricity from outlets or other electric Pokémon.",
  },
  {
    id: "777",
    name: "Togedemaru",
    type: ["Electric","Steel"],
    classification: "Roly-Poly",
    height: "1'00\"",
    weight: "7.3lbs",
    text: "When it’s surprised or agitated, the 14 fur spikes on its back will stand up involuntarily.",
  },
  {
    id: "778",
    name: "Mimikyu",
    type: ["Ghost","Fairy"],
    classification: "Disguise",
    height: "0'08\"",
    weight: "1.5lbs",
    text: "There will be no forgiveness for any who reveal that it was pretending to be Pikachu. It will bring the culprit down, even at the cost of its own life.",
  },
  {
    id: "877",
    name: "Morpeko",
    type: ["Electric","Dark"],
    classification: "Two-Sided",
    height: "1'00\"",
    weight: "6.6lbs",
    text: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity.",
  },
  {
    id: "921",
    name: "Pawmi",
    type: ["Electric"],
    classification: "Mouse",
    height: "1'00\"",
    weight: "5.5lbs",
    text: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
  },
  {
    id: "922",
    name: "Pawmo",
    type: ["Electric", "Fighting"],
    classification: "Mouse",
    height: "1'04\"",
    weight: "14.3lbs",
    text: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
  },
  {
    id: "923",
    name: "Pawmot",
    type: ["Electric", "Fighting"],
    classification: "Hands-On",
    height: "2'11\"",
    weight: "90.4lbs",
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
