import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  public loading = true;
  public searchForm!: FormGroup;

  public movies: Array<Movie> = [
    {
      backdrop_path: '/99vBORZixICa32Pwdwj0lWcr8K.jpg',
      first_air_date: '2021-09-03',
      genre_ids: [10764],
      id: 130392,
      name: "The D'Amelio Show",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "The D'Amelio Show",
      overview:
        'From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.',
      popularity: 20.075,
      poster_path: '/phv2Jc4H8cvRzvTKb9X1uKMboTu.jpg',
      vote_average: 9,
      vote_count: 3166,
    },
    {
      backdrop_path: '/uJ16DD1dj4CQLPNCWIoiOF3l8np.jpg',
      first_air_date: '2023-01-15',
      genre_ids: [18, 10765, 10759],
      id: 100088,
      name: 'The Last of Us',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Last of Us',
      overview:
        'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.',
      popularity: 9681.188,
      poster_path: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      vote_average: 9,
      vote_count: 792,
    },
    {
      backdrop_path: '/hwIAR9FDsKULo8efoOUuxsFtO2u.jpg',
      first_air_date: '2008-01-20',
      genre_ids: [18],
      id: 1396,
      name: 'Breaking Bad',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Breaking Bad',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 431.388,
      poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      vote_average: 8.9,
      vote_count: 10955,
    },
    {
      backdrop_path: '/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg',
      first_air_date: '2021-11-06',
      genre_ids: [16, 10765, 10759, 18],
      id: 94605,
      name: 'Arcane',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arcane',
      overview:
        'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',
      popularity: 84.25,
      poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      vote_average: 8.7,
      vote_count: 2863,
    },
    {
      backdrop_path: '/7vCSrzwqS5PEm0i5mHlkDfjHcnX.jpg',
      first_air_date: '2022-12-30',
      genre_ids: [18],
      id: 136283,
      name: 'The Glory',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '더 글로리',
      overview:
        'After a childhood marked by pain and violence, a woman puts a carefully planned revenge scheme in motion.',
      popularity: 130.02,
      poster_path: '/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg',
      vote_average: 8.7,
      vote_count: 117,
    },
    {
      backdrop_path: '/uGy4DCmM33I7l86W7iCskNkvmLD.jpg',
      first_air_date: '2013-12-02',
      genre_ids: [16, 35, 10765, 10759],
      id: 60625,
      name: 'Rick and Morty',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Rick and Morty',
      overview:
        "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
      popularity: 606.5,
      poster_path: '/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg',
      vote_average: 8.7,
      vote_count: 7793,
    },
    {
      backdrop_path: '/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg',
      first_air_date: '2022-10-12',
      genre_ids: [16, 10759, 10765, 35],
      id: 114410,
      name: 'Chainsaw Man',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'チェンソーマン',
      overview:
        'Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.',
      popularity: 868,
      poster_path: '/npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
      vote_average: 8.7,
      vote_count: 743,
    },
    {
      backdrop_path: '/790rH1ByeDJg6VPwBFxdzxHRepI.jpg',
      first_air_date: '2019-04-06',
      genre_ids: [16, 35],
      id: 85990,
      name: 'Hitoribocchi no Marumaruseikatsu',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ひとりぼっちの○○生活',
      overview:
        "Hitori Bocchi suffers from extreme social anxiety, she's not good at talking to people, takes pretty extreme actions, is surprisingly adept at avoiding people, her legs cramp when she overexerts herself, gets full of herself when alone, will vomit when exposed to extreme tension and often comes up with plans. Now she is entering middle school and her only friend, Yawara Kai, is attending a different school. This leaves Bocchi alone, surrounded by new classmates with whom she must make friends before Kai will talk to her again.",
      popularity: 12.993,
      poster_path: '/btoTzCw3zmjRtB99g2M5Mw2GUQG.jpg',
      vote_average: 8.7,
      vote_count: 127,
    },
    {
      backdrop_path: '/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg',
      first_air_date: '1999-10-20',
      genre_ids: [10759, 35, 16],
      id: 37854,
      name: 'One Piece',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ワンピース',
      overview:
        'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!',
      popularity: 105.48,
      poster_path: '/e3NBGiAifW9Xt8xD5tpARskjccO.jpg',
      vote_average: 8.7,
      vote_count: 3524,
    },
    {
      backdrop_path: '/dJ8yrSokdTMnhKJw06MllSfCegb.jpg',
      first_air_date: '2019-01-12',
      genre_ids: [16, 35, 18],
      id: 83121,
      name: 'Kaguya-sama: Love Is War',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
      overview:
        "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship.",
      popularity: 64.522,
      poster_path: '/5khbC6AuNgnvnoDbjIMKCOhEtIc.jpg',
      vote_average: 8.7,
      vote_count: 582,
    },
    {
      backdrop_path: '/70YdbMELM4b8x8VXjlubymb2bQ0.jpg',
      first_air_date: '2017-03-19',
      genre_ids: [18, 10751],
      id: 70785,
      name: 'Anne with an E',
      origin_country: ['CA'],
      original_language: 'en',
      original_name: 'Anne with an E',
      overview:
        'A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.',
      popularity: 84.782,
      poster_path: '/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg',
      vote_average: 8.7,
      vote_count: 4183,
    },
    {
      backdrop_path: '/iBAtBLqCMON3NPIjyQ1wdMbpTAk.jpg',
      first_air_date: '2019-04-06',
      genre_ids: [16, 10765, 10759],
      id: 85937,
      name: 'Demon Slayer: Kimetsu no Yaiba',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鬼滅の刃',
      overview:
        'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.',
      popularity: 83.362,
      poster_path: '/wrCVHdkBlBWdJUZPvnJWcBRuhSY.jpg',
      vote_average: 8.7,
      vote_count: 4705,
    },
    {
      backdrop_path: '/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg',
      first_air_date: '2009-04-05',
      genre_ids: [10759, 16, 10765],
      id: 31911,
      name: 'Fullmetal Alchemist: Brotherhood',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鋼の錬金術師 FULLMETAL ALCHEMIST',
      overview:
        "Edward and Alphonse Elric's reckless disregard for alchemy's fun­damental laws ripped half of Ed's limbs from his body and left Al's soul clinging to a cold suit of armor. To restore what was lost, the brothers scour a war-torn land for the Philosopher's Sto­ne, a fabled relic which grants the ability to perform alchemy in impossible ways.\n\nThe Elrics are not alone in their search; the corrupt State Military is also eager to harness the artifact's power. So too are the strange Homunculi and their shadowy creator. The mythical gem lures exotic alchemists from distant kingdoms, scarring some deeply enough to inspire murder. As the Elrics find their course altered by these enemies and allies, their purpose remains unchanged – and their bond unbreakable.",
      popularity: 68.726,
      poster_path: '/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg',
      vote_average: 8.7,
      vote_count: 1549,
    },
    {
      backdrop_path: '/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg',
      first_air_date: '2021-03-25',
      genre_ids: [16, 10765, 10759, 18],
      id: 95557,
      name: 'Invincible',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Invincible',
      overview:
        'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.',
      popularity: 125.059,
      poster_path: '/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg',
      vote_average: 8.7,
      vote_count: 3363,
    },
    {
      backdrop_path: '/smSbK5cd8T9XHcxEUcems23BDEF.jpg',
      first_air_date: '2016-12-02',
      genre_ids: [18, 10765, 35],
      id: 67915,
      name: 'Goblin',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '쓸쓸하고 찬란하神-도깨비',
      overview:
        'In his quest for a bride to break his immortal curse, a 939-year-old guardian of souls meets a grim reaper and a sprightly student with a tragic past.',
      popularity: 96.384,
      poster_path: '/c2gon6zbqzL73DOl8mPQMMUJXvE.jpg',
      vote_average: 8.7,
      vote_count: 2430,
    },
    {
      backdrop_path: '/2vbE9ajftJ7dkqUAyxDS0WFILx8.jpg',
      first_air_date: '2010-09-06',
      genre_ids: [16, 35],
      id: 31132,
      name: 'Regular Show',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Regular Show',
      overview:
        'Two bored groundskeepers, Mordecai (a six-foot-tall blue jay) and Rigby (a hyperactive raccoon) are best friends who spend their days trying to entertain themselves by any means necessary, much to the displeasure of their boss. Their everyday pursuits often lead to things spiraling out of control and into the surreal.',
      popularity: 165.884,
      poster_path: '/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg',
      vote_average: 8.7,
      vote_count: 1646,
    },
    {
      backdrop_path: '/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg',
      first_air_date: '2016-04-03',
      genre_ids: [10759, 16],
      id: 65930,
      name: 'My Hero Academia',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '僕のヒーローアカデミア',
      overview:
        "In a world where eighty percent of the population has some kind of super-powered Quirk, Izuku was unlucky enough to be born completely normal. But that won't stop him from enrolling in a prestigious hero academy. Now, he'll get his first taste of brutal rivalry from other schools as he braves the cutthroat, no-holds-barred provisional license exam.",
      popularity: 73.692,
      poster_path: '/ivOLM47yJt90P19RH1NvJrAJz9F.jpg',
      vote_average: 8.7,
      vote_count: 4125,
    },
    {
      backdrop_path: '/fCz519JJeXEtMfR4CmM9tR7rZOB.jpg',
      first_air_date: '2022-04-14',
      genre_ids: [10764],
      id: 154521,
      name: 'The Kardashians',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Kardashians',
      overview:
        'The family you know and love is here with a brand new series, giving an all-access pass into their lives. Kris, Kourtney, Kim, Khloé, Kendall, and Kylie bring the cameras back to reveal the truth behind the headlines. From the intense pressures of running billion-dollar businesses to the hilarious joys of playtime and school drop-offs, this series brings viewers into the fold with a rivetingly honest story of love & life in the spotlight.',
      popularity: 94.655,
      poster_path: '/ntLiiyI2AVIVAtVKwUYqi36e3bM.jpg',
      vote_average: 8.7,
      vote_count: 1842,
    },
    {
      backdrop_path: '/iLR6tKvMu67oSK0DIgDutkPBaiy.jpg',
      first_air_date: '2018-07-08',
      genre_ids: [35, 16],
      id: 80539,
      name: 'Asobi Asobase - workshop of fun -',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'あそびあそばせ',
      overview:
        'During recess, Olivia, a foreign transfer student who doesn\'t know English, plays a game of "look-the-other-way" with Hanako Honda, a loud-mouthed airhead. Their rowdy behavior spurs the ire of Kasumi Nomura, a deadpan loner constantly teased by her older sister for her tendency to lose games. Not willing to compete, Kasumi declines Olivia\'s offer to join the fun, but eventually gets involved anyway and dispenses her own brand of mischief. Soon, a strange friendship blossoms between the peculiar trio, and they decide to form the "Pastime Club," where they are free to resume their daily hijinks.\n\nWhether it be failing to learn English, trying desperately to become popular, or getting caught by teachers at the wrong time, school life will never be boring when these girls are up to their hilarious antics.',
      popularity: 12.751,
      poster_path: '/zWE3bnCILcRpfQCsxBkMsgcEjOE.jpg',
      vote_average: 8.7,
      vote_count: 114,
    },
    {
      backdrop_path: '/yreuPT1RYFvWkQ3gjnjRP8vAq3o.jpg',
      first_air_date: '2022-04-09',
      genre_ids: [16, 35, 10759],
      id: 120089,
      name: 'SPY x FAMILY',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'SPY×FAMILY',
      overview:
        'World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!',
      popularity: 337.034,
      poster_path: '/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg',
      vote_average: 8.7,
      vote_count: 1129,
    },
  ];
  ngOnInit(): void {}
  handleFormSubmission() {
    console.log(this.searchForm.value);
    this.searchForm.reset();
  }

  constructor() {
    this.searchForm = new FormGroup({
      query: new FormControl(null, [Validators.required]),
    });
  }
}
