import { CardsOfDayType, SingleCard } from '../types/card';

const daysLeft = (day: string) => 24 - Number.parseInt(day) || 0;
const calendarIntro = (day: string): SingleCard => [
  { text: `${day}.`, size: 'big' },
  { text: 'luukku' },
];
const daysToChristmas = (day: string): SingleCard => [
  { text: `${daysLeft(day)}`, size: 'big' },
  { text: 'päivää jouluun!' },
];

export const allJokes: CardsOfDayType = {
  1: [
    [{ text: 'Miksi Harrison Fordilla ei ole perskarvoja?' }],
    [{ text: 'Hän on takaa-ajettu.' }],
  ],
  2: [[{ text: 'Missä kissat asuvat?' }], [{ text: 'Kattilassa' }]],
};

export const getDays = (): string[] => Object.keys(allJokes ?? {});
export const createJoke = (day: string): SingleCard[] => [
  calendarIntro(day),
  ...allJokes[day],
  daysToChristmas(day),
];
