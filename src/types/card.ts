export type CardText = {
  text: string;
  size?: 'big' | 'normal';
};

export type SingleCard = CardText[];

export type CardsOfDayType = {
  [day: number]: SingleCard[];
};

export type CardState = {
  cardsOfTheDay: SingleCard[];
  oldJokeOfTheDay: SingleCard[];
  visibleCardIndex: number;
  isOld: boolean;
  days: string[];
  nextCard: () => void;
  anotherJoke: (index: string) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  setOld: (setOld: boolean) => void;
};
