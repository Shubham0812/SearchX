export interface ISong {
  name: string;
  thumbnail: string;
  mimeType: string;
  artist: string;
  tracks: ITracks[];
}

export interface ITracks {
  trackName: string;
  artistName: string;
  albumName: string;
  country: string;
  genre: string;
}

export interface IArtist {
  name: string;
  subscribers: string;
  thumbnail: string;
  mimeType: string;
}
