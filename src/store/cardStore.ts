import create from 'zustand';
import { CardState } from '../types/card';
import { createJoke, getDays } from './jokes';
import { showDay } from './utils';

const today = showDay();

export const useCardStore = create<CardState>()((set) => ({
  cardsOfTheDay: createJoke(today.toString()),
  visibleCardIndex: 0,
  days: getDays(),
  nextCard: () =>
    set((state) => ({
      visibleCardIndex:
        state.visibleCardIndex < state.cardsOfTheDay.length - 1
          ? state.visibleCardIndex + 1
          : state.visibleCardIndex,
    })),
  anotherJoke: (index: string) =>
    set((state) => ({ cardsOfTheDay: createJoke(index), visibleCardIndex: 0 })),
  loading: true,
  setLoading: (isLoading: boolean) => set((state) => ({ loading: isLoading })),
}));
