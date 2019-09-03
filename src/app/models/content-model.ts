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
  trackId: number;
}

export interface IArtist {
  name: string;
  subscribers: string;
  thumbnail: string;
  mimeType: string;
  artistId: number;
  albums: IAlbums[];
  genre: string;
}

export interface IAlbums {
  albumName: string;
  albumImage: string;
  albumTrackCount: string;
  albumGenre: string;
  date: string;
  price: number;
}
