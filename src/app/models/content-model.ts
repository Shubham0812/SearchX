export interface ISong {
  trackName: string;
  thumbnail: string;
  mimeType: string;
  artist: string;
  tracks: ITracks[];
  publishYear: number;
  duration: string;
  genre: string;
  trackId: number;
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
  biggerThumbnail: string;
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
  albumId: number;
  albumImage: string;
  albumTrackCount: string;
  albumGenre: string;
  date: string;
  price: number;
}

export interface IBooks {
  artistName: string;
  artistId: number;
  bookName: string;
  thumbnail: string;
  genre: string;
}

export interface IMovie {
  movieName: string;
  movieId: number;
  genre: string;
  year: number;
  directorName: string;
  thumbnail: string;
  movies: IDirector[];
}

export interface IDirector {
  movieName: string;
  movieId: number;
  genre: string;
  thumbnail: string;
}
