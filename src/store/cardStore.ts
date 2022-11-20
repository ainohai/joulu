
import create from 'zustand';
import { demoCards, SingleCard } from '../types/card'

const day = 1;
const daysLeft = 24 - day;
const daysToChristmas: SingleCard = [{ text: daysLeft.toString(), size: "big" }, { text: "päivää jouluun!" }]

type CardState = {
  cardsOfTheDay: SingleCard[],
  visibleCardIndex: number,
  nextCard: () => void
}

export const useCardStore = create<CardState>()((set) => ({
  cardsOfTheDay: [...demoCards[day], daysToChristmas],
  visibleCardIndex: 0,
  nextCard: () => set(
    (state) => ({ visibleCardIndex: (state.visibleCardIndex < state.cardsOfTheDay.length - 1) ? state.visibleCardIndex + 1 : state.visibleCardIndex }
    ))
}))

