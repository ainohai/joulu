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
  visibleCardIndex: number;
  days: string[];
  nextCard: () => void;
  anotherJoke: (index: string) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};
