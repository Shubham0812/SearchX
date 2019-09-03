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
  constructor(private http: HttpClient) { }

  content: ISong[] = [
    {
      name: "Machayenge",
      thumbnail: "assets/thumbnail/music/songs/emiway-machayenge.jpg",
      mimeType: "Song",
      artist: "Emiway",
      tracks: this.getSongs("emiway"),
      publishYear: 2019,
      duration: "2:33",
      genre: "Hip-Hop/Rap"
    },
    {
      name: "Buniyaad",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-buniyaad.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "4:16",
      genre: "Indian Pop"
    },
    {
      name: "Shotgun",
      thumbnail: "assets/thumbnail/music/songs/george-ezra-shotgun.jpg",
      mimeType: "Song",
      artist: "George Ezra",
      tracks: this.getSongs("georgeezra"),
      publishYear: 2018,
      duration: "3:21",
      genre: "Singer/Songwriter"
    },
    {
      name: "Good Things Fall Apart",
      thumbnail: "assets/thumbnail/music/songs/illenium-good-things.jpg",
      mimeType: "Song",
      artist: "Illenium",
      tracks: this.getSongs("illenium"),
      publishYear: 2019,
      duration: "3:37",
      genre: "Dance"
    },
    {
      name: "Birds",
      thumbnail: "assets/thumbnail/music/songs/imagine-dragons-birds.jpg",
      mimeType: "Song",
      artist: "Imagine Dragons",
      tracks: this.getSongs("imaginedragons"),
      publishYear: 2019,
      duration: "3:39",
      genre: "Alternative"
    },
    {
      name: "Azadi",
      thumbnail: "assets/thumbnail/music/songs/gully-boy-azadi.jpg",
      mimeType: "Song",
      artist: "Gully Boy",
      tracks: this.getSongs("gullyboy"),
      publishYear: 2019,
      duration: "2:35",
      genre: "Hip-Hop/Rap"
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
      genre: "Bollywood"
    },
    {
      name: "New Divide",
      thumbnail: "assets/thumbnail/music/songs/linkin-park-new-divide.jpg",
      mimeType: "Song",
      artist: "Linkin Park",
      tracks: this.getSongs("linkinpark"),
      publishYear: 2009,
      duration: "4:28",
      genre: "Rock"
    },
    {
      name: "Bad Guy",
      thumbnail: "assets/thumbnail/music/songs/billie-eilish-bad-guy.jpg",
      mimeType: "Song",
      artist: "Billie Eilish",
      tracks: this.getSongs("billieeilish"),
      publishYear: 2019,
      duration: "3:14",
      genre: "Alternative"
    },
    {
      name: "Marz",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-marz.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary"),
      publishYear: 2018,
      duration: "3:54",
      genre: "Pop"
    },
    {
      name: "She Don't Know",
      thumbnail: "assets/thumbnail/music/songs/millind-gaba-she-dont-know.jpg",
      mimeType: "Song",
      artist: "Millind Gaba",
      tracks: this.getSongs("millindgaba"),
      publishYear: 2019,
      duration: "3:23",
      genre: "Hip-Hop/Rap"
    },
    {
      name: "Bekhayali",
      thumbnail: "assets/thumbnail/music/songs/kabir-singh-bekhayali.jpg",
      mimeType: "Song",
      artist: "Kabir Singh",
      tracks: this.getSongs("kabirsingh"),
      publishYear: 2019,
      duration: "6:12",
      genre: "Bollywood"
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
      genre: "Alternative",
    },
    {
      name: "The Chainsmokers",
      subscribers: "19M",
      thumbnail: "assets/thumbnail/music/artists/artist-the-chainsmokers.jpg",
      mimeType: "artist",
      artistId: 580391756,
      albums: this.getAlbums(580391756),
      genre: "Dance",
    },
    {
      name: "Maroon 5",
      subscribers: "24M",
      thumbnail: "assets/thumbnail/music/artists/artist-maroon-5.jpg",
      mimeType: "artist",
      artistId: 1798556,
      albums: this.getAlbums(1798556),
      genre: "Pop",
    }
  ];

  getContent(): ISong[] {
    return this.content;
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
            trackId: song.trackId,
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
    return names.join(' ');
  }

   capitalizeFirstLetter(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
}


