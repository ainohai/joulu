import { CardsOfDayType, SingleCard } from '../types/card';
import { showDay } from './utils';

const daysLeft = (day: string) => 24 - Number.parseInt(day) || 0;
const calendarIntro = (day: string): SingleCard => [
  { text: `${day}.`, size: 'big' },
  { text: 'luukku' },
];
const daysToChristmas = (day: string): SingleCard => [
  { text: `${daysLeft(day)}`, size: 'big' },
  { text: 'päivää jouluun.' },
];
const merryChristmas = (): SingleCard => [
  { text: `Oivallista ${showDay() >= 22 ? 'joulua' : 'joulun odotusta'}!` },
];

export const allJokes: CardsOfDayType = {
  1: [
    [{ text: 'Miksi salaatti meni lääkäriin?' }],
    [{ text: 'Koska kurkku oli kipeä.' }],
  ],
  2: [
    [{ text: 'Mitä pylly tekee puukäsityöntunnilla?' }],
    [{ text: 'Hyllyy' }],
  ],
  3: [
    [{ text: 'Miksi kuka tahansa ei voi olla joulupukki?' }],
    [{ text: 'Kaikilla ei ole tarpeeksi lahjoja.' }],
  ],
  4: [
    [{ text: 'Jos laitat vapahtajan arkkuun, mitä sinulla on?' }],
    [{ text: 'Jeesus kirstus.' }],
  ],
  5: [
    [{ text: 'Mitä yhteistä on insinöörillä ja salamalla?' }],
    [{ text: 'Ensin välähtää ja sitten korjataan tuhot.' }],
  ],

  6: [
    [{ text: 'Mikä on hiekan ja noidan sekoitus?' }],
    [{ text: 'Sandwich.' }],
  ],
  7: [
    [
      {
        text: 'Miksi joulupukki meni psykiatrille?',
      },
    ],
    [{ text: 'Hän ei enää uskonut itseensä.' }],
  ],
  8: [
    [
      {
        text: 'Minkä niminen on nainen, joka menee marjastamaan eikä löydä marjoja?',
      },
    ],
    [{ text: 'Marjatta.' }],
  ],
  9: [
    [{ text: 'Miksi hampaita ei kannata pestä vasemmalla kädellä?' }],
    [{ text: 'Hammasharja on tehokkaampi.' }],
  ],
  10: [
    [{ text: 'Mitä eroa on pianistilla ja huilistilla?' }],
    [{ text: 'Huilistilla on pilli kuonon alla ja pianistilla toisin päin.' }],
  ],
  11: [
    [{ text: 'Miksi kannattaa hankkia liian pienet turvakengät?' }],
    [{ text: 'Voi olla aina pienissä sievissä.' }],
  ],
  12: [
    [{ text: 'Mitä vangilla oli mukana karatessa?' }],
    [{ text: 'Musta vyö.' }],
  ],
  13: [
    [
      {
        text: 'Kolme kiinalaista kaverusta nimeltään Bu, Chu ja Fu muutti Amerikkaan. Perille päästyään he päättivät muuttaa nimensä amerikkalaisiksi.',
      },
    ],
    [
      {
        text: 'Bu muutti nimekseen Buck, ja Chu muutti nimekseen Chuck. Fu päätti lähteä takaisin Kiinaan.',
      },
    ],
  ],
  14: [
    [{ text: 'Disney World etsii jälleen kesätyöntekijöitä.' }],
    [{ text: 'Pian on taas kiitettävä määrä kesähessuja.' }],
  ],
  15: [
    [{ text: 'Mitä kalastuksesta haaveileva tekee koulussa?' }],
    [{ text: 'Pilkkii oppitunnilla.' }],
  ],
  16: [
    [{ text: 'Cashewpähkinä kysyi maapähkinältä: "miksi teit noin?"' }],
    [{ text: 'Koska maapähkinävoi.' }],
  ],
  17: [
    [{ text: 'Mitä kainuulainen sanoi soittaessaan hätäkeskukseen?' }],
    [{ text: 'Nyt on susiset paikat.' }],
  ],
  18: [
    [{ text: 'Al Capone ryhtyi laihdutuskuurille.' }],
    [{ text: 'Muutaman kuukauden jälkeen hän oli Al Caposempi' }],
  ],
  19: [[{ text: 'Mikä on kirjolohen äidin nimi?' }], [{ text: 'Pirjo Lohi' }]],
  20: [
    [{ text: 'Minkä takia ohjelmoijan juopottelu pysyi hyvin kurissa?' }],
    [{ text: 'Hän keksi itselleen todella toimivan alkorytmin.' }],
  ],
  21: [
    [{ text: 'Mistä rallikuskien ruoat tulevat?' }],
    [{ text: 'Erikoiskokeilta.' }],
  ],
  22: [
    [{ text: 'Mikä on äärioikeistolaisten humalatila?' }],
    [{ text: 'PeruSkänni.' }],
  ],
  23: [
    [{ text: 'Naisystäväni pyysi minua hemmottelemaan häntä.' }],
    [
      {
        text: 'Nyt hän on aivan raivoissaan, kun olen pari viikkoa kutsunut häntä Hemmoksi.',
      },
    ],
  ],
  24: [
    [{ text: 'Kemisti jäädytti itsensä -273,15°C asteeseen' }],
    [
      {
        text: 'Kaikki sanoivat, että hän oli hullu, mutta hän oli 0K.',
      },
    ],
  ],
};

export const oldJokes: CardsOfDayType = {
  1: [
    [{ text: 'Miksi Harrison Fordilla ei ole perskarvoja?' }],
    [{ text: 'Hän on takaa-ajettu.' }],
  ],
  2: [
    [{ text: 'Mitä eroa on vaaleilla ja tummilla kanoilla?' }],
    [{ text: 'Vaaleissa äänestetään.' }],
  ],
  3: [[{ text: 'Missä kissat asuvat?' }], [{ text: 'Kattilassa' }]],
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
export const createOldJoke = (day: string): SingleCard[] => [
  ...oldJokes[day],
  merryChristmas(),
];
