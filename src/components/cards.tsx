import * as React from "react"
import { useCardStore } from "../store/cardStore";
import { SingleCard } from "../types/card";

type CardProps = {
    card: SingleCard,
    index: number,
    totalNumOfCards: number
};

const Card = (props: CardProps) => {

    const { card, index, totalNumOfCards } = props;
    const { visibleCardIndex, nextCard } = useCardStore()

    return (
        <article
            style={{
                display: index === visibleCardIndex ? "flex" : "none",
                cursor: index < totalNumOfCards - 1 ? "pointer" : "default",
            }}
            className="cardContent"
            onClick={() => nextCard()}
        >
            {card.map((cardPart, index) =>
                <p
                    key={index}
                    style={cardPart.size === "big" ? { fontSize: "52px" } : {}}>
                    {cardPart.text}
                </p>
            )}
        </article>
    )

}

export default function Cards() {

    const cards = useCardStore((state) => state.cardsOfTheDay);

    return (
        <main className="container">
            <div className="centeredCard">
                {cards.map((card, index) =>
                    <Card card={card} index={index} totalNumOfCards={cards.length} key={index} />
                )
                }
            </div>
        </main>
    )

}
