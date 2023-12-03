import create from 'zustand';
import { CardState, SingleCard } from '../types/card';
import { createJoke, createOldJoke, getDays } from './jokes';
import { showDay } from './utils';

const today = showDay();
const getCorrectCards = (state: CardState) =>
  state.isOld ? state.oldJokeOfTheDay : state.cardsOfTheDay;
const anyCardsLeft = (visibleCardIndex: number, cards: SingleCard[]) =>
  visibleCardIndex < cards.length - 1;

export const useCardStore = create<CardState>()((set) => ({
  oldJokeOfTheDay: createOldJoke(today.toString()),
  cardsOfTheDay: createJoke(today.toString()),
  visibleCardIndex: 0,
  isOld: false,
  days: getDays(),
  nextCard: () =>
    set((state) => ({
      visibleCardIndex: anyCardsLeft(
        state.visibleCardIndex,
        getCorrectCards(state)
      )
        ? state.visibleCardIndex + 1
        : state.visibleCardIndex,
    })),
  anotherJoke: (index: string) =>
    set((state) => ({
      cardsOfTheDay: createJoke(index),
      visibleCardIndex: 0,
      isOld: false,
      oldJokeOfTheDay: createOldJoke(index),
    })),
  loading: true,
  setLoading: (isLoading: boolean) => set((state) => ({ loading: isLoading })),
  setOld: (isOld: boolean) => {
    set((state) => ({ isOld: isOld, visibleCardIndex: 0 }));
  },
}));
