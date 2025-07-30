import dataImage1 from "../assets/dataImage1.png";
import dataImage2 from "../assets/dataImage2.png";
import dataImage3 from "../assets/dataImage3.png";
import dataImage4 from "../assets/dataImage4.png";
import dataImage5 from "../assets/dataImage5.png";
import dataImage6 from "../assets/dataImage6.png";
import dataImage7 from "../assets/dataImage7.png";
import dataImage8 from "../assets/dataImage8.png";
import dataImage9 from "../assets/dataImage9.png";
import dataImage10 from "../assets/dataImage10.png";
import dataImage11 from "../assets/dataImage11.png";
import dataImage12 from "../assets/dataImage12.png";

import trophyImage from "../assets/icons/trophy.png";
import rouletteImage from "../assets/icons/roulette.png";
import cheapImage from "../assets/icons/cheap.png";

export interface Game {
  id: number;
  title: string;
  image: string;
}

export interface GameSection {
  title: string;
  icon: string;
  games: Game[];
}

export const gameSections: GameSection[] = [
  {
    title: "Melhores jogos ao vivo",
    icon: trophyImage,
    games: [
      { id: 1, title: "Football Studio", image: dataImage1 },
      { id: 2, title: "BAC BO", image: dataImage2 },
      { id: 3, title: "Immersive Roulette", image: dataImage3 },
      { id: 4, title: "Crazy Time", image: dataImage4 },
      { id: 5, title: "Monopoly Live", image: dataImage5 },
      { id: 6, title: "Monopoly Live", image: dataImage6 },
      { id: 7, title: "Monopoly Live", image: dataImage7 },
      { id: 8, title: "Monopoly Live", image: dataImage8 },
    ],
  },
  {
    title: "Roletas",
    icon: rouletteImage,
    games: [
      { id: 9, title: "Lightning Roulette", image: dataImage9 },
      { id: 10, title: "Instant Roulette", image: dataImage10 },
      { id: 11, title: "Auto Roulette", image: dataImage11 },
      { id: 12, title: "Auto Roulette", image: dataImage12 },
      { id: 13, title: "Auto Roulette", image: dataImage1 },
      { id: 14, title: "Auto Roulette", image: dataImage2 },
      { id: 15, title: "Auto Roulette", image: dataImage3 },
      { id: 16, title: "Auto Roulette", image: dataImage4 },
      { id: 17, title: "Auto Roulette", image: dataImage5 },
      { id: 18, title: "Auto Roulette", image: dataImage6 },
    ],
  },
  {
    title: "Baccarat",
    icon: cheapImage,
    games: [
      { id: 19, title: "Auto Roulette", image: dataImage7 },
      { id: 20, title: "Auto Roulette", image: dataImage8 },
      { id: 21, title: "Speed Baccarat", image: dataImage9 },
      { id: 22, title: "No Commission Baccarat", image: dataImage10 },
      { id: 23, title: "Auto Roulette", image: dataImage11 },
      { id: 24, title: "Auto Roulette", image: dataImage12 },
      { id: 25, title: "Speed Baccarat", image: dataImage1 },
      { id: 26, title: "No Commission Baccarat", image: dataImage2 },
      { id: 27, title: "Auto Roulette", image: dataImage3 },
      { id: 28, title: "Auto Roulette", image: dataImage4 },
      { id: 29, title: "Speed Baccarat", image: dataImage5 },
      { id: 30, title: "No Commission Baccarat", image: dataImage6 },
      { id: 31, title: "Auto Roulette", image: dataImage7 },
      { id: 32, title: "Auto Roulette", image: dataImage8 },
      { id: 33, title: "Speed Baccarat", image: dataImage9 },
      { id: 34, title: "No Commission Baccarat", image: dataImage10 },
      { id: 35, title: "Auto Roulette", image: dataImage11 },
      { id: 36, title: "Auto Roulette", image: dataImage12 },
      { id: 37, title: "Speed Baccarat", image: dataImage1 },
      { id: 38, title: "No Commission Baccarat", image: dataImage2 },
      { id: 39, title: "Auto Roulette", image: dataImage3 },
      { id: 40, title: "Auto Roulette", image: dataImage4 },
      { id: 41, title: "Speed Baccarat", image: dataImage5 },
      { id: 42, title: "No Commission Baccarat", image: dataImage6 },
      { id: 43, title: "Auto Roulette", image: dataImage7 },
      { id: 44, title: "Auto Roulette", image: dataImage8 },
      { id: 45, title: "Speed Baccarat", image: dataImage9 },
      { id: 46, title: "No Commission Baccarat", image: dataImage10 },
      { id: 47, title: "Auto Roulette", image: dataImage11 },
      { id: 48, title: "Auto Roulette", image: dataImage12 },
      { id: 49, title: "Speed Baccarat", image: dataImage1 },
      { id: 50, title: "No Commission Baccarat", image: dataImage2 },
      { id: 51, title: "Auto Roulette", image: dataImage3 },
      { id: 52, title: "Auto Roulette", image: dataImage4 },
      { id: 53, title: "Speed Baccarat", image: dataImage5 },
      { id: 54, title: "No Commission Baccarat", image: dataImage6 },
      { id: 55, title: "Auto Roulette", image: dataImage7 },
      { id: 56, title: "Auto Roulette", image: dataImage8 },
      { id: 57, title: "Speed Baccarat", image: dataImage9 },
      { id: 58, title: "No Commission Baccarat", image: dataImage10 },
      { id: 59, title: "Auto Roulette", image: dataImage11 },
      { id: 60, title: "Auto Roulette", image: dataImage12 },
      { id: 61, title: "Speed Baccarat", image: dataImage1 },
      { id: 62, title: "No Commission Baccarat", image: dataImage2 },
      { id: 63, title: "Auto Roulette", image: dataImage3 },
      { id: 64, title: "Auto Roulette", image: dataImage4 },
      { id: 65, title: "Speed Baccarat", image: dataImage5 },
      { id: 66, title: "No Commission Baccarat", image: dataImage6 },
      { id: 67, title: "Auto Roulette", image: dataImage7 },
      { id: 68, title: "Auto Roulette", image: dataImage8 },
      { id: 69, title: "Speed Baccarat", image: dataImage9 },
      { id: 70, title: "No Commission Baccarat", image: dataImage10 },
      { id: 71, title: "Auto Roulette", image: dataImage11 },
      { id: 72, title: "Auto Roulette", image: dataImage12 },
      { id: 73, title: "Speed Baccarat", image: dataImage1 },
      { id: 74, title: "No Commission Baccarat", image: dataImage2 },
      { id: 75, title: "Auto Roulette", image: dataImage3 },
      { id: 76, title: "Auto Roulette", image: dataImage4 },
    ],
  },
  {
    title: "BlackJack",
    icon: trophyImage,
    games: [
      { id: 77, title: "Speed Baccarat", image: dataImage5 },
      { id: 79, title: "No Commission Baccarat", image: dataImage6 },
      { id: 80, title: "No Commission Baccarat", image: dataImage7 },
      { id: 81, title: "No Commission Baccarat", image: dataImage8 },
      { id: 82, title: "No Commission Baccarat", image: dataImage9 },
      { id: 83, title: "No Commission Baccarat", image: dataImage10 },
      { id: 84, title: "No Commission Baccarat", image: dataImage11 },
      { id: 85, title: "No Commission Baccarat", image: dataImage12 },
      { id: 86, title: "No Commission Baccarat", image: dataImage1 },
      { id: 87, title: "No Commission Baccarat", image: dataImage2 },
      { id: 88, title: "No Commission Baccarat", image: dataImage3 },
      { id: 89, title: "No Commission Baccarat", image: dataImage4 },
      { id: 90, title: "No Commission Baccarat", image: dataImage5 },
      { id: 91, title: "No Commission Baccarat", image: dataImage6 },
      { id: 92, title: "No Commission Baccarat", image: dataImage7 },
      { id: 93, title: "No Commission Baccarat", image: dataImage8 },
      { id: 94, title: "No Commission Baccarat", image: dataImage9 },
      { id: 95, title: "No Commission Baccarat", image: dataImage10 },
      { id: 96, title: "No Commission Baccarat", image: dataImage11 },
      { id: 97, title: "No Commission Baccarat", image: dataImage12 },
      { id: 98, title: "No Commission Baccarat", image: dataImage1 },
      { id: 99, title: "No Commission Baccarat", image: dataImage2 },
      { id: 100, title: "No Commission Baccarat", image: dataImage3 },
      { id: 100, title: "No Commission Baccarat", image: dataImage4 },
      { id: 100, title: "No Commission Baccarat", image: dataImage5 },
      { id: 100, title: "No Commission Baccarat", image: dataImage6 },
      { id: 100, title: "No Commission Baccarat", image: dataImage7 },
    ],
  },
  {
    title: "Dados",
    icon: trophyImage,
    games: [
      { id: 100, title: "No Commission Baccarat", image: dataImage8 },
      { id: 100, title: "No Commission Baccarat", image: dataImage9 },
      { id: 100, title: "No Commission Baccarat", image: dataImage10 },
      { id: 100, title: "No Commission Baccarat", image: dataImage11 },
    ],
  },
];
