import { Injectable } from "@angular/core";
import { ISong, IArtist, ITracks } from "../models/content-model";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  private loadSource = new BehaviorSubject(false);
  currentState = this.loadSource.asObservable();
  constructor(private http: HttpClient) {}

  content: ISong[] = [
    {
      name: "Machayenge",
      thumbnail: "assets/thumbnail/music/songs/emiway-machayenge.jpg",
      mimeType: "Song",
      artist: "Emiway",
      tracks: this.getSongs("emiway")
    },
    {
      name: "Buniyaad",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-buniyaad.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary")
    },
    {
      name: "Shotgun",
      thumbnail: "assets/thumbnail/music/songs/george-ezra-shotgun.jpg",
      mimeType: "Song",
      artist: "George Ezra",
      tracks: this.getSongs("georgeezra")
    },
    {
      name: "Good Things Fall Apart",
      thumbnail: "assets/thumbnail/music/songs/illenium-good-things.jpg",
      mimeType: "Song",
      artist: "Illenium",
      tracks: this.getSongs("illenium")
    },
    {
      name: "Birds",
      thumbnail: "assets/thumbnail/music/songs/imagine-dragons-birds.jpg",
      mimeType: "Song",
      artist: "Imagine Dragons",
      tracks: this.getSongs("imaginedragons")
    },
    {
      name: "Azadi",
      thumbnail: "assets/thumbnail/music/songs/gully-boy-azadi.jpg",
      mimeType: "Song",
      artist: "Gully Boy",
      tracks: this.getSongs("gullyboy")
    },
    {
      name: "Yahin Hoon Main",
      thumbnail:
        "assets/thumbnail/music/songs/ayushmann-khurrana-yahin-hoon-main.jpg",
      mimeType: "Song",
      artist: "Ayushmann Khurrana",
      tracks: this.getSongs("ayushmannkhurrana")
    },
    {
      name: "New Divide",
      thumbnail: "assets/thumbnail/music/songs/linkin-park-new-divide.jpg",
      mimeType: "Song",
      artist: "Linkin Park",
      tracks: this.getSongs("linkinpark")
    },
    {
      name: "Bad Guy",
      thumbnail: "assets/thumbnail/music/songs/billie-eilish-bad-guy.jpg",
      mimeType: "Song",
      artist: "Billie Eilish",
      tracks: this.getSongs("billieeilish")
    },
    {
      name: "Marz",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-marz.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary",
      tracks: this.getSongs("theyellowdiary")
    },
    {
      name: "She Don't Know",
      thumbnail: "assets/thumbnail/music/songs/millind-gaba-she-dont-know.jpg",
      mimeType: "Song",
      artist: "Millind Gaba",
      tracks: this.getSongs("millindgaba")
    },
    {
      name: "Bekhayali",
      thumbnail: "assets/thumbnail/music/songs/kabir-singh-bekhayali.jpg",
      mimeType: "Song",
      artist: "Kabir Singh",
      tracks: this.getSongs("kabirsingh")
    }
  ];

  artist: IArtist[] = [
    {
      name: "Imagine Dragons",
      subscribers: "18M",
      thumbnail: "assets/thumbnail/music/artists/artist-imagine-dragons.jpg",
      mimeType: "artist"
    },
    {
      name: "Linkin Park",
      subscribers: "14M",
      thumbnail: "assets/thumbnail/music/artists/artist-linkin-park.jpg",
      mimeType: "artist"
    },
    {
      name: "Billie Eilish",
      subscribers: "17M",
      thumbnail: "assets/thumbnail/music/artists/artist-billie-eilish.jpg",
      mimeType: "artist"
    },
    {
      name: "Coldplay",
      subscribers: "14M",
      thumbnail: "assets/thumbnail/music/artists/artist-coldplay.jpg",
      mimeType: "artist"
    },
    {
      name: "The Chainsmokers",
      subscribers: "19M",
      thumbnail: "assets/thumbnail/music/artists/artist-the-chainsmokers.jpg",
      mimeType: "artist"
    },
    {
      name: "Maroon 5",
      subscribers: "24M",
      thumbnail: "assets/thumbnail/music/artists/artist-maroon-5.jpg",
      mimeType: "artist"
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
      `https://itunes.apple.com/search?term=${artist.toLowerCase()}&limit=8`
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
            genre: song.primaryGenreName
          };
          console.log("tracks", trackData);
          tracks.push(trackData);
        });
        console.log("final data", tracks);
      }
    );
    return tracks;
  }
}
