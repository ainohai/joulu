import { CardsOfDayType, SingleCard } from '../types/card';

const daysLeft = (day: string) => 24 - Number.parseInt(day) || 0;
const calendarIntro = (day: string): SingleCard => [
  { text: `${day}.`, size: 'big' },
  { text: 'luukku' },
];
const daysToChristmas = (day: string): SingleCard => [
  { text: `${daysLeft(day)}`, size: 'big' },
  { text: 'päivää jouluun!' },
];

export const allJokes: CardsOfDayType = {
  1: [
    [{ text: 'Miksi Harrison Fordilla ei ole perskarvoja?' }],
    [{ text: 'Hän on takaa-ajettu.' }],
  ],
  2: [[{ text: 'Missä kissat asuvat?' }], [{ text: 'Kattilassa' }]],
  3: [
    [{ text: 'Mitä eroa on vaaleilla ja tummilla kanoilla?' }],
    [{ text: 'Vaaleissa äänestetään.' }],
  ],
  4: [
    [{ text: 'Mitä eksoottinen hedelmä sanoi Uudenmaan rajalla?' }],
    [{ text: 'Passi on!' }],
  ],
  5: [
    [{ text: 'Miltä surulliset joutsenet näyttävät?' }],
    [{ text: 'Kurjilta.' }],
  ],
  6: [
    [{ text: 'Miksi mustekalalla on 8 lonkeroa?' }],
    [{ text: 'Kaupasta oli kalja loppu.' }],
  ],
  7: [
    [
      {
        text: 'Jos presidentin rouva perustaisi kalakaupan, mikä olisi sen nimi?',
      },
    ],
    [{ text: 'Hauki on kala.' }],
  ],
  8: [
    [{ text: 'Mitä hyvää on Sveitsiläisyydessä?' }],
    [{ text: 'No ainakin lippu on iso plussa.' }],
  ],
  9: [
    [{ text: 'Mitä Einstein sanoi kun poliisi pysäytti hänet?' }],
    [{ text: 'Hiukkasen kiihdytin.' }],
  ],
  10: [
    [{ text: 'Mitä sirkuksen johtaja sanoi joutuessaan vankilaan?' }],
    [{ text: 'Karuselli.' }],
  ],
  11: [
    [{ text: 'Kumpi on parempi, hevonen vai auto?' }],
    [{ text: 'Koneista ei ole mihinkään.' }],
  ],
  12: [
    [{ text: 'Kuinka vyötehtaan työntekijät ansaitsevat elantonsa?' }],
    [{ text: 'He tekevät vöitä sen eteen.' }],
  ],
  13: [
    [
      {
        text: 'Jos on kolme karhua ja kaksi niistä lähtee pois, niin mitä jää jäljelle?',
      },
    ],
    [{ text: 'Jää karhu.' }],
  ],
  14: [
    [{ text: 'Millä puolella kanaa on enemmän höyheniä?' }],
    [{ text: 'Ulkopuolella.' }],
  ],
  15: [
    [{ text: 'Naaraskarhu huolissaan Suomen metsistä:' }],
    [{ text: 'Otsoni tuhoaa Suomen metsiä.' }],
  ],
  16: [
    [{ text: 'Miksi Petteri Punakuono menee Skotlantiin?' }],
    [{ text: 'Se menee luokse lasten kilttien.' }],
  ],
  17: [
    [{ text: 'Mitä lukee gigantin myyjän palkkakuitissa?' }],
    [{ text: 'Se nyt vaan on tyhmää maksaa liikaa.' }],
  ],
  18: [
    [{ text: 'Millä loukkaantunut panda viedään sairaalaan?' }],
    [{ text: 'Bambulanssilla' }],
  ],
  19: [[{ text: 'Mikä on kirjolohen äidin nimi?' }], [{ text: 'Pirjo Lohi' }]],
  20: [
    [{ text: 'Mitä yhteistä on lemulla ja löyhkällä?' }],
    [{ text: 'Molemmat on lokkaleita.' }],
  ],
  21: [
    [{ text: 'Mistä tietää, että hevoset tykkäävät pitsasta?' }],
    [{ text: 'Ne on aina salamina paikalla' }],
  ],
  22: [
    [{ text: 'Mitä huumeiden salakuljettaja sanoi tullissa?' }],
    [{ text: 'Kamalasti pelottaa' }],
  ],
  23: [
    [
      {
        text: 'Peukut pystyyn, että hyllytilaa riittää! sanoi elinsiirtoklinikan johtaja.',
      },
    ],
    [{ text: ':)' }],
  ],
  24: [
    [{ text: 'Jos joulupukki konttaa sisään, onko hän humalassa?' }],
    [
      {
        text: 'Ei välttämättä. Pukin toimenkuvaan kuuluu, että hän käy välillä kontillaan.',
      },
    ],
  ],
};

export const getDays = (): string[] => Object.keys(allJokes ?? {});
export const createJoke = (day: string): SingleCard[] => [
  calendarIntro(day),
  ...allJokes[day],
  daysToChristmas(day),
];
