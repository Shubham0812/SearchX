import { Injectable } from "@angular/core";
import {
  ISong,
  IArtist,
  ITracks,
  IAlbums,
  IMovie,
  IDirector
} from "../models/content-model";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDoService } from "../services/to-do.service";
import { IToDo } from "../models/to-do-model";

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  private loadSource = new BehaviorSubject(false);
  currentState = this.loadSource.asObservable();
  bookmarkContent = [];

  content: ISong[] = [
    {
      trackName: "Machayenge",
      thumbnail: "assets/thumbnail/music/songs/emiway-machayenge.jpg",
      mimeType: "Song",
      artist: "Emiway",
      tracks: this.getSongs("emiway"),
      publishYear: 2019,
      duration: "2:33",
      genre: "Hip-Hop/Rap",
      trackId: 1231
    },
    {
      trackName: "Buniyaad",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-buniyaad.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "4:16",
      genre: "Indian Pop",
      trackId: 1314
    },
    {
      trackName: "Shotgun",
      thumbnail: "assets/thumbnail/music/songs/george-ezra-shotgun.jpg",
      mimeType: "Song",
      artist: "George Ezra",
      tracks: this.getSongs("georgeezra"),
      publishYear: 2018,
      duration: "3:21",
      genre: "Singer/Songwriter",
      trackId: 13113
    },
    {
      trackName: "Good Things Fall Apart",
      thumbnail: "assets/thumbnail/music/songs/illenium-good-things.jpg",
      mimeType: "Song",
      artist: "Illenium",
      tracks: this.getSongs("illenium"),
      publishYear: 2019,
      duration: "3:37",
      genre: "Dance",
      trackId: 1314141
    },
    {
      trackName: "Birds",
      thumbnail: "assets/thumbnail/music/songs/imagine-dragons-birds.jpg",
      mimeType: "Song",
      artist: "Imagine Dragons",
      tracks: this.getSongs("imaginedragons"),
      publishYear: 2019,
      duration: "3:39",
      genre: "Alternative",
      trackId: 131414
    },
    {
      trackName: "Azadi",
      thumbnail: "assets/thumbnail/music/songs/gully-boy-azadi.jpg",
      mimeType: "Song",
      artist: "Gully Boy",
      tracks: this.getSongs("gullyboy"),
      publishYear: 2019,
      duration: "2:35",
      genre: "Hip-Hop/Rap",
      trackId: 1310
    },
    {
      trackName: "Yahin Hoon Main",
      thumbnail:
        "assets/thumbnail/music/songs/ayushmann-khurrana-yahin-hoon-main.jpg",
      mimeType: "Song",
      artist: "Ayushmann Khurrana",
      tracks: this.getSongs("ayushmannkhurrana"),
      publishYear: 2017,
      duration: "3:58",
      genre: "Bollywood",
      trackId: 1362
    },
    {
      trackName: "New Divide",
      thumbnail: "assets/thumbnail/music/songs/linkin-park-new-divide.jpg",
      mimeType: "Song",
      artist: "Linkin Park",
      tracks: this.getSongs("linkinpark"),
      publishYear: 2009,
      duration: "4:28",
      genre: "Rock",
      trackId: 13643
    },
    {
      trackName: "Bad Guy",
      thumbnail: "assets/thumbnail/music/songs/billie-eilish-bad-guy.jpg",
      mimeType: "Song",
      artist: "Billie Eilish",
      tracks: this.getSongs("billieeilish"),
      publishYear: 2019,
      duration: "3:14",
      genre: "Alternative",
      trackId: 1152
    },
    {
      trackName: "Marz",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-marz.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "3:54",
      genre: "Pop",
      trackId: 13151
    },
    {
      trackName: "She Don't Know",
      thumbnail: "assets/thumbnail/music/songs/millind-gaba-she-dont-know.jpg",
      mimeType: "Song",
      artist: "Millind Gaba",
      tracks: this.getSongs("millindgaba"),
      publishYear: 2019,
      duration: "3:23",
      genre: "Hip-Hop/Rap",
      trackId: 1235
    },
    {
      trackName: "Bekhayali",
      thumbnail: "assets/thumbnail/music/songs/kabir-singh-bekhayali.jpg",
      mimeType: "Song",
      artist: "Kabir Singh",
      tracks: this.getSongs("kabirsingh"),
      publishYear: 2019,
      duration: "6:12",
      genre: "Bollywood",
      trackId: 1526
    }
  ];

  latestSongs: ISong[] = [
    {
      trackName: "Take Me Back To London (Remix)",
      thumbnail: "assets/thumbnail/music/latest-songs/ed-sheeran.jpg",
      mimeType: "Song",
      artist: "Ed Sheeran",
      tracks: this.getSongs("Ed Sheeran"),
      publishYear: 2019,
      duration: "3:52",
      genre: "Pop",
      trackId: 113
    },
    {
      trackName: "Pal Pal Dil Ke Paas",
      thumbnail: "assets/thumbnail/music/latest-songs/pal-pal.jpg",
      mimeType: "Song",
      artist: "Sachet–Parampara",
      tracks: this.getSongs("Sachet–Parampara"),
      publishYear: 2019,
      duration: "4:14",
      genre: "Bollywood",
      trackId: 1515
    },
    {
      trackName: "When It Comes To You",
      thumbnail: "assets/thumbnail/music/latest-songs/sean-paul.jpg",
      mimeType: "Song",
      artist: "Sean Paul",
      tracks: this.getSongs("Sean Paul"),
      publishYear: 2019,
      duration: "3:01",
      genre: "Rock",
      trackId: 515
    },
    {
      trackName: "Dilli Waali Baatcheet",
      thumbnail: "assets/thumbnail/music/latest-songs/dilli-walli.jpg",
      mimeType: "Song",
      artist: "Raftaar",
      tracks: this.getSongs("Raftaar"),
      publishYear: 2019,
      duration: "3:21",
      genre: "Rap",
      trackId: 1014
    },
    {
      trackName: "Stay",
      thumbnail: "assets/thumbnail/music/latest-songs/stay.jpg",
      mimeType: "Song",
      artist: "The Score",
      tracks: this.getSongs("The Score"),
      publishYear: 2019,
      duration: "3:01",
      genre: "Alternative",
      trackId: 2051
    },
    {
      trackName: "Angel",
      thumbnail: "assets/thumbnail/music/latest-songs/angel.jpg",
      mimeType: "Song",
      artist: "Zack Knight",
      tracks: this.getSongs("Zack Knight"),
      publishYear: 2019,
      duration: "2:55",
      genre: "R & B",
      trackId: 1132
    }
  ];

  artist: IArtist[] = [
    {
      name: "Imagine Dragons",
      subscribers: "18M",
      thumbnail: "assets/thumbnail/music/artists/artist-imagine-dragons.jpg",
      mimeType: "artist",
      artistId: 358714030,
      albums: this.getAlbums(358714030),
      genre: "Alternative"
    },
    {
      name: "Linkin Park",
      subscribers: "14M",
      thumbnail: "assets/thumbnail/music/artists/artist-linkin-park.jpg",
      mimeType: "artist",
      artistId: 148662,
      albums: this.getAlbums(148662),
      genre: "Hard Rock"
    },
    {
      name: "Billie Eilish",
      subscribers: "17M",
      thumbnail: "assets/thumbnail/music/artists/artist-billie-eilish.jpg",
      mimeType: "artist",
      artistId: 1065981054,
      albums: this.getAlbums(1065981054),
      genre: "Alternative"
    },
    {
      name: "Coldplay",
      subscribers: "14M",
      thumbnail: "assets/thumbnail/music/artists/artist-coldplay.jpg",
      mimeType: "artist",
      artistId: 471744,
      albums: this.getAlbums(471744),
      genre: "Alternative"
    },
    {
      name: "The Chainsmokers",
      subscribers: "19M",
      thumbnail: "assets/thumbnail/music/artists/artist-the-chainsmokers.jpg",
      mimeType: "artist",
      artistId: 580391756,
      albums: this.getAlbums(580391756),
      genre: "Dance"
    },
    {
      name: "Maroon 5",
      subscribers: "24M",
      thumbnail: "assets/thumbnail/music/artists/artist-maroon-5.jpg",
      mimeType: "artist",
      artistId: 1798556,
      albums: this.getAlbums(1798556),
      genre: "Pop"
    },
    {
      name: "Raftaar",
      subscribers: "2.4M",
      thumbnail: "assets/thumbnail/music/artists/artist-raftaar.jpg",
      mimeType: "artist",
      artistId: 574786227,
      albums: this.getAlbums(574786227),
      genre: "Bollywood"
    },
    {
      name: "Ed Sheeran",
      subscribers: "41M",
      thumbnail: "assets/thumbnail/music/artists/artist-ed-sheeran.jpg",
      mimeType: "artist",
      artistId: 183313439,
      albums: this.getAlbums(183313439),
      genre: "Pop"
    }
  ];

  popularMovie: IMovie[] = [
    {
      movieName: "The Dark Knight",
      movieId: 764632601,
      genre: "Action & Adventure",
      directorName: "Christopher Nolan",
      year: 2008,
      thumbnail: "assets/thumbnail/movies/popular/dark-knight.png",
      movies: this.getMovies("Christopher Nolan")
    },
    {
      movieName: "Forrest Gump",
      movieId: 314029341,
      genre: "Drama",
      directorName: "Robert Zemeckis",
      year: 1994,
      thumbnail: "assets/thumbnail/movies/popular/forest-gump.jpg",
      movies: this.getMovies("Robert Zemeckis")
    },
    {
      movieName: "Braveheart",
      movieId: 270007336,
      genre: "Documentary",
      directorName: "Mel Gibson",
      year: 1995,
      thumbnail: "assets/thumbnail/movies/popular/braveheart.jpg",
      movies: this.getMovies("Mel Gibson")
    },
    {
      movieName: "Gladiator",
      movieId: 397380075,
      genre: "Drama",
      directorName: "Ridley Scott",
      year: 1992,
      thumbnail: "assets/thumbnail/movies/popular/gladiator.jpg",
      movies: this.getMovies("Ridley Scott")
    },
    {
      movieName: "The Shawshank Redemption",
      movieId: 2024797,
      genre: "Drama",
      directorName: "Stephen King",
      year: 1994,
      thumbnail: "assets/thumbnail/movies/popular/shawshank-redemption.png",
      movies: this.getMovies("Stephen King")
    },
    {
      movieName: "Schindler's List",
      movieId: 587742072,
      genre: "Drama",
      directorName: "Steven Spielberg",
      year: 1993,
      thumbnail: "assets/thumbnail/movies/popular/schindler's-list.jpg",
      movies: this.getMovies("Steven Spielberg")
    },
    {
      movieName: "The Pianist",
      movieId: 1326154898,
      genre: "Drama",
      directorName: "Roman Polanski",
      year: 2003,
      thumbnail: "assets/thumbnail/movies/popular/the-pianist.jpg",
      movies: this.getMovies("Roman Polanski")
    }
  ];

  latestHollywood: IMovie[] = [
    {
      movieName: "Joker",
      movieId: 76463260134,
      genre: "Drama",
      directorName: "Todd Phillips",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/joker.jpg",
      movies: this.getMovies("Todd Phillips")
    },
    {
      movieName: "X-Men: Dark Phoenix",
      movieId: 1464833546,
      genre: "Action & Adventure",
      directorName: "Simon Kinberg",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/dark-phoenix.jpg",
      movies: this.getMovies("Simon Kinberg")
    },
    {
      movieName: "The Lion King",
      movieId: 1471367629,
      genre: "Action & Adventure",
      directorName: "Jon Favreau",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/lion-king.jpg",
      movies: this.getMovies("Jon Favreau")
    },
    {
      movieName: "Once Upon a Time In Hollywood",
      movieId: 1473165316,
      genre: "Drama",
      directorName: "Quentin Tarantino",
      year: 2019,
      thumbnail:
        "assets/thumbnail/movies/latest-hollywood/once-upon-a-time-hollywood.png",
      movies: this.getMovies("Quentin Tarantino")
    },
    {
      movieName: "Brightburn",
      movieId: 1463706265,
      genre: "Thriller",
      directorName: "David Yarovesky",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/brightburn.jpg",
      movies: this.getMovies("David Yarovesky")
    },
    {
      movieName: "Spider-Man: Far from Home",
      movieId: 1469325682,
      genre: "Action & Adventure",
      directorName: "Jon Watts",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/spiderman.jpg",
      movies: this.getMovies("Jon Watts")
    },
    {
      movieName: "Alladin",
      movieId: 1463237984,
      genre: "Action & Adventure",
      directorName: "Guy Ritchie",
      year: 2019,
      thumbnail: "assets/thumbnail/movies/latest-hollywood/alladin.jpg",
      movies: this.getMovies("Guy Ritchie")
    }
  ];

  constructor(private http: HttpClient, private toDoSvc: ToDoService) {
    this.shuffle(this.content);
    this.shuffle(this.artist);
    this.shuffle(this.latestSongs);
    this.content.forEach(song => {
      this.bookmarkContent[song.trackId] = false;
    });

    this.latestSongs.forEach(song => {
      this.bookmarkContent[song.trackId] = false;
    });

    this.artist.forEach(artist => {
      this.bookmarkContent[artist.artistId] = false;
    });

    this.popularMovie.forEach(movie => {
      this.bookmarkContent[movie.movieId] = false;
    });

    this.latestHollywood.forEach(movie => {
      this.bookmarkContent[movie.movieId] = false;
    });

    // console.log("Check it", this.bookmarkContent);
  }

  getContent(): ISong[] {
    return this.content;
  }

  getLatestContent(): ISong[] {
    return this.latestSongs;
  }

  getArtists(): IArtist[] {
    return this.artist;
  }

  getPopularMovies(): IMovie[] {
    return this.popularMovie;
  }

  getLatestHollywood(): IMovie[] {
    return this.latestHollywood;
  }

  changeLoadState(state: boolean) {
    this.loadSource.next(state);
  }

  getTracksForArtist(artist: string): Observable<any> {
    return this.http.get(
      `https://itunes.apple.com/search?term=${artist.toLowerCase()}&limit=5`
    );
  }

  getAlbumsForArtist(artistId: number): Observable<any> {
    return this.http.get(
      `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=10`
    );
  }

  getMoviesForDirector(directorName: string): Observable<any> {
    return this.http.get(
      `https://itunes.apple.com/search?term=${directorName}&entity=movie&limit=10`
    );
  }

  getSongs(artistName: string): ITracks[] {
    const tracks: ITracks[] = [];
    this.getTracksForArtist(artistName.toLowerCase()).subscribe(
      (songs: any) => {
        // console.log("checking songs", songs.results);
        songs.results.forEach((song: any) => {
          // console.log(song.artistName, "->", song.trackName);
          const trackData: ITracks = {
            trackName: song.trackName,
            artistName: song.artistName,
            albumName: song.collectionName,
            country: song.country,
            genre: song.primaryGenreName,
            duration: this.convertMillis(song.trackTimeMillis),
            thumbnail: song.artworkUrl30,
            biggerThumbnail: song.artworkUrl100,
            trackId: song.trackId
          };
          this.bookmarkContent[trackData.trackId] = false;

          tracks.push(trackData);
        });
      }
    );
    return tracks;
  }

  getAlbums(artistId: number): IAlbums[] {
    const collections: IAlbums[] = [];
    this.getAlbumsForArtist(artistId).subscribe((albums: any) => {
      albums = albums.results.splice(1);
      albums.forEach((album: any) => {
        const albumData: IAlbums = {
          albumName: this.processNames(album.collectionName),
          albumId: album.collectionId,
          albumImage: album.artworkUrl100,
          albumTrackCount: album.trackCount,
          albumGenre: album.primaryGenreName,
          date: album.releaseDate.split("-")[0],
          price: album.collectionPrice
        };
        this.bookmarkContent[albumData.albumId] = false;
        collections.push(albumData);
      });
      // console.log("final album", albums);
    });
    return collections;
  }

  getMovies(directorName: string): IDirector[] {
    const collections: IDirector[] = [];
    this.getMoviesForDirector(directorName).subscribe((movies: any) => {
      movies.results.forEach((movie: any) => {
        const movieData: IDirector = {
          movieName: movie.trackName,
          movieId: movie.trackId,
          genre: movie.primaryGenreName,
          thumbnail: movie.artworkUrl100
        };
        this.bookmarkContent[movieData.movieId] = false;
        collections.push(movieData);
      });
      // console.log("final movie", movies);
    });
    return collections;
  }

  convertMillis(time: number): string {
    const secondConvertRate = 0.001;
    const seconds = secondConvertRate * time;

    const mins = Math.floor(seconds / 60);
    let secs = String(Math.round(seconds % 60));
    secs = Number(secs) < 10 ? `0${secs}` : secs;

    return `${mins}:${secs}`;
  }

  processNames(contentName: string): string {
    const names = contentName.split(" ");
    let count = 0;
    names.forEach(name => {
      names[count] = this.capitalizeFirstLetter(name);
      count += 1;
    });
    return names.join(" ");
  }

  capitalizeFirstLetter(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  getBookmarkData(): any[] {
    return this.bookmarkContent;
  }

  fillBookmarkFromStorage() {
    const myList = this.toDoSvc.fetchToDoListData();
    if (myList !== null) {
      // console.log("My list", myList);
      myList.forEach((list: IToDo) => {
        this.bookmarkContent[list.id] = true;
      });
    }
  }
}
