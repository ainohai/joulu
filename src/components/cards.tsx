import * as React from 'react';
import { useCardStore } from '../store/cardStore';
import { SingleCard } from '../types/card';

type CardProps = {
  card: SingleCard;
  index: number;
  totalNumOfCards: number;
};

const Card = (props: CardProps) => {
  const { card, index, totalNumOfCards } = props;
  const { visibleCardIndex, nextCard, isOld, setOld } = useCardStore();

  return (
    <article
      style={{
        display: index === visibleCardIndex ? 'flex' : 'none',
        cursor: index < totalNumOfCards - 1 ? 'pointer' : 'default',
      }}
      className="cardContent"
      onClick={() => {
        if (index < totalNumOfCards - 1) {
          nextCard();
        }
      }}
    >
      {card.map((cardPart, index) => (
        <p
          key={index}
          style={cardPart.size === 'big' ? { fontSize: '52px' } : {}}
        >
          {cardPart.text}
        </p>
      ))}
      {index >= totalNumOfCards - 1 && !isOld && (
        <a
          className="oldJoke"
          onClick={() => {
            setOld(true);
          }}
        >
          Tahdon vanhemman vitsin (2022).
        </a>
      )}
    </article>
  );
};

export default function Cards() {
  const cards = useCardStore((state) =>
    !state.isOld ? state.cardsOfTheDay : state.oldJokeOfTheDay
  );

  return (
    <main className="container">
      <div className="centeredCard">
        {cards.map((card, index) => (
          <Card
            card={card}
            index={index}
            totalNumOfCards={cards.length}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
