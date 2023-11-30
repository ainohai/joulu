import create from 'zustand';
import { CardState } from '../types/card';
import { createJoke, createOldJoke, getDays } from './jokes';
import { showDay } from './utils';

const today = showDay();

export const useCardStore = create<CardState>()((set) => ({
  oldJokeOfTheDay: createOldJoke(today.toString()),
  cardsOfTheDay: createJoke(today.toString()),
  visibleCardIndex: 0,
  isOld: false,
  days: getDays(),
  nextCard: () =>
    set((state) => ({
      visibleCardIndex:
        state.visibleCardIndex <
        (state.isOld
          ? state.oldJokeOfTheDay.length - 1
          : state.cardsOfTheDay.length - 1)
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
    console.log('setting');
    set((state) => ({ isOld: isOld, visibleCardIndex: 0 }));
  },
}));
