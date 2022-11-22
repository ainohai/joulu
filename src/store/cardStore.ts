
import create from 'zustand';
import { CardState } from '../types/card'
import { allJokes, createJoke } from './jokes';

const today = "1";

export const useCardStore = create<CardState>()((set) => ({
  cardsOfTheDay: createJoke(today),
  visibleCardIndex: 0,
  cards: allJokes ?? [],
  nextCard: () => set(
    (state) => ({ visibleCardIndex: 
      (state.visibleCardIndex < state.cardsOfTheDay.length - 1) ? state.visibleCardIndex + 1 : state.visibleCardIndex }
    )),
    anotherJoke: (index: string) => set(
      (state) => ({ cardsOfTheDay: createJoke(index), visibleCardIndex: 0 }))
}))

