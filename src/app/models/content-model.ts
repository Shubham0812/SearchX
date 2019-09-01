export interface ISong {
  name: string;
  thumbnail: string;
  mimeType: string;
  artist: string;
  tracks: ITracks[];
  publishYear: number;
  duration: string;
  genre: string;
}

export interface ITracks {
  trackName: string;
  artistName: string;
  albumName: string;
  country: string;
  genre: string;
  duration: string;
  thumbnail: string;
}

export interface IArtist {
  name: string;
  subscribers: string;
  thumbnail: string;
  mimeType: string;
}
