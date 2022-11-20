export type CardText = {
    text: string;
    size?: "big"|"normal"
}

export type SingleCard = CardText[]

export type CardsOfDayType = {
    [day: number] : SingleCard[]
}


export const demoCards: CardsOfDayType = {
    1 : [
        [ {text: "1.", size: "big"}, {text: "luukku"}], //Always the same?
        [ {text: "Miksi Harrison Fordilla ei ole perskarvoja?"}],
        [ {text: "Hän on takaa-ajettu."}]
    ],
    2 : [
        [ {text: "2.", size: "big"}, {text: "luukku"}],
        [ {text: "Missä kissat asuvat?"}],
        [ {text: "Kattilassa"}]
    ],
}