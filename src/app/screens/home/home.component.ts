import { Component, OnInit } from '@angular/core';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies: Array<Movie> = [
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

  constructor() {}

  ngOnInit(): void {}
}
