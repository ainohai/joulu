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
        position: 'relative',
        fontFamily: 'Baskerville Old Face, Bookman Antiqua, Georgia, serif',
        backgroundColor: 'rgba(15, 11, 7, 0.75)',
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
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            margin: '1rem',
            fontSize: '0.75rem',
            color: 'rgb(187, 198, 206)',
          }}
          onClick={() => {
            console.log(setOld);
            setOld(true);
          }}
        >
          Tahdon vanhemman vitsin.
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
