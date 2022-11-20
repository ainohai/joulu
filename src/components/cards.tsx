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
            className="fadeCart"
            style={{ boxShadow: "none", 
            display: index === visibleCardIndex ? "flex" : "none", 
            alignItems: "center", 
            minWidth: "500px", 
            minHeight:"300px", 
            cursor: index < totalNumOfCards -1 ? "pointer" : "default",
            flexDirection: "column", 
            animation: "fadeIn 2.5s",
            justifyContent: "space-around" }}
            onClick={() => nextCard()}
        >
            {card.map((cardPart, index) =>
                <p 
                key={index} 
                style={{ fontSize: cardPart.size === "big" ? "52px" : "1.2em" }}>
                    {cardPart.text}
                </p>
            )}
        </article>
    )

}

export default function Cards() {

    const cards = useCardStore((state) => state.cardsOfTheDay)

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
