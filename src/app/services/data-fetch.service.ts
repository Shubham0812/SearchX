import { Injectable } from "@angular/core";
import { ISong, IArtist, ITracks, IAlbums } from "../models/content-model";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  private loadSource = new BehaviorSubject(false);
  currentState = this.loadSource.asObservable();

  content: ISong[] = [
    {
      name: "Machayenge",
      thumbnail: "assets/thumbnail/music/songs/emiway-machayenge.jpg",
      mimeType: "Song",
      artist: "Emiway",
      tracks: this.getSongs("emiway"),
      publishYear: 2019,
      duration: "2:33",
      genre: "Hip-Hop/Rap",
      songId: 1231
    },
    {
      name: "Buniyaad",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-buniyaad.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "4:16",
      genre: "Indian Pop",
      songId: 1314
    },
    {
      name: "Shotgun",
      thumbnail: "assets/thumbnail/music/songs/george-ezra-shotgun.jpg",
      mimeType: "Song",
      artist: "George Ezra",
      tracks: this.getSongs("georgeezra"),
      publishYear: 2018,
      duration: "3:21",
      genre: "Singer/Songwriter",
      songId: 13113
    },
    {
      name: "Good Things Fall Apart",
      thumbnail: "assets/thumbnail/music/songs/illenium-good-things.jpg",
      mimeType: "Song",
      artist: "Illenium",
      tracks: this.getSongs("illenium"),
      publishYear: 2019,
      duration: "3:37",
      genre: "Dance",
      songId: 1314141
    },
    {
      name: "Birds",
      thumbnail: "assets/thumbnail/music/songs/imagine-dragons-birds.jpg",
      mimeType: "Song",
      artist: "Imagine Dragons",
      tracks: this.getSongs("imaginedragons"),
      publishYear: 2019,
      duration: "3:39",
      genre: "Alternative",
      songId: 131414
    },
    {
      name: "Azadi",
      thumbnail: "assets/thumbnail/music/songs/gully-boy-azadi.jpg",
      mimeType: "Song",
      artist: "Gully Boy",
      tracks: this.getSongs("gullyboy"),
      publishYear: 2019,
      duration: "2:35",
      genre: "Hip-Hop/Rap",
      songId: 1310
    },
    {
      name: "Yahin Hoon Main",
      thumbnail:
        "assets/thumbnail/music/songs/ayushmann-khurrana-yahin-hoon-main.jpg",
      mimeType: "Song",
      artist: "Ayushmann Khurrana",
      tracks: this.getSongs("ayushmannkhurrana"),
      publishYear: 2017,
      duration: "3:58",
      genre: "Bollywood",
      songId: 1362
    },
    {
      name: "New Divide",
      thumbnail: "assets/thumbnail/music/songs/linkin-park-new-divide.jpg",
      mimeType: "Song",
      artist: "Linkin Park",
      tracks: this.getSongs("linkinpark"),
      publishYear: 2009,
      duration: "4:28",
      genre: "Rock",
      songId: 13643
    },
    {
      name: "Bad Guy",
      thumbnail: "assets/thumbnail/music/songs/billie-eilish-bad-guy.jpg",
      mimeType: "Song",
      artist: "Billie Eilish",
      tracks: this.getSongs("billieeilish"),
      publishYear: 2019,
      duration: "3:14",
      genre: "Alternative",
      songId: 1152
    },
    {
      name: "Marz",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-marz.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "3:54",
      genre: "Pop",
      songId: 13151
    },
    {
      name: "She Don't Know",
      thumbnail: "assets/thumbnail/music/songs/millind-gaba-she-dont-know.jpg",
      mimeType: "Song",
      artist: "Millind Gaba",
      tracks: this.getSongs("millindgaba"),
      publishYear: 2019,
      duration: "3:23",
      genre: "Hip-Hop/Rap",
      songId: 1235
    },
    {
      name: "Bekhayali",
      thumbnail: "assets/thumbnail/music/songs/kabir-singh-bekhayali.jpg",
      mimeType: "Song",
      artist: "Kabir Singh",
      tracks: this.getSongs("kabirsingh"),
      publishYear: 2019,
      duration: "6:12",
      genre: "Bollywood",
      songId: 1526
    }
  ];

  constructor(private http: HttpClient) {
    this.shuffle(this.content);
    this.shuffle(this.artist);
    this.shuffle(this.latestSongs);
  }

  latestSongs: ISong[] = [
    {
      name: "Take Me Back To London (Remix)",
      thumbnail: "assets/thumbnail/music/latest-songs/ed-sheeran.jpg",
      mimeType: "Song",
      artist: "Ed Sheeran",
      tracks: this.getSongs("Ed Sheeran"),
      publishYear: 2019,
      duration: "3:52",
      genre: "Pop",
      songId: 113
    },
    {
      name: "Pal Pal Dil Ke Paas",
      thumbnail: "assets/thumbnail/music/latest-songs/pal-pal.jpg",
      mimeType: "Song",
      artist: "Sachet–Parampara",
      tracks: this.getSongs("Sachet–Parampara"),
      publishYear: 2019,
      duration: "4:14",
      genre: "Bollywood",
      songId: 1515
    },
    {
      name: "When It Comes To You",
      thumbnail: "assets/thumbnail/music/latest-songs/sean-paul.jpg",
      mimeType: "Song",
      artist: "Sean Paul",
      tracks: this.getSongs("Sean Paul"),
      publishYear: 2019,
      duration: "3:01",
      genre: "Rock",
      songId: 515
    },
    {
      name: "Dilli Waali Baatcheet",
      thumbnail: "assets/thumbnail/music/latest-songs/dilli-walli.jpg",
      mimeType: "Song",
      artist: "Raftaar",
      tracks: this.getSongs("Raftaar"),
      publishYear: 2019,
      duration: "3:21",
      genre: "Rap",
      songId: 1014
    },
    {
      name: "Stay",
      thumbnail: "assets/thumbnail/music/latest-songs/stay.jpg",
      mimeType: "Song",
      artist: "The Score",
      tracks: this.getSongs("The Score"),
      publishYear: 2019,
      duration: "3:01",
      genre: "Alternative",
      songId: 2051
    },
    {
      name: "Angel",
      thumbnail: "assets/thumbnail/music/latest-songs/angel.jpg",
      mimeType: "Song",
      artist: "Zack Knight",
      tracks: this.getSongs("Zack Knight"),
      publishYear: 2019,
      duration: "2:55",
      genre: "R & B",
      songId: 1132
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

  getContent(): ISong[] {
    return this.content;
  }

  getLatestContent(): ISong[] {
    return this.latestSongs;
  }

  getArtists(): IArtist[] {
    return this.artist;
  }

  changeLoadState(state: boolean) {
    this.loadSource.next(state);
  }

  getTracksForArtist(artist: string): Observable<any> {
    const tracks: ITracks[] = [];
    return this.http.get(
      `https://itunes.apple.com/search?term=${artist.toLowerCase()}&limit=5`
    );
  }

  getAlbumsForArtist(artistId: number): Observable<any> {
    const tracks: ITracks[] = [];
    return this.http.get(
      `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=10`
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
            trackId: song.trackId
          };
          // console.log("tracks", trackData);
          tracks.push(trackData);
        });
        console.log("final data", tracks);
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
        // console.log("albums", albumData);
        collections.push(albumData);
      });
      console.log("final album", albums);
    });
    return collections;
  }

  convertMillis(time: number): string {
    const secondConvertRate = 0.001;
    const seconds = secondConvertRate * time;
    console.log(
      "seconds ",
      seconds,
      " now ",
      Math.floor(seconds / 60),
      "=>",
      Math.round(seconds % 60),
      "check seconds"
    );

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
}
