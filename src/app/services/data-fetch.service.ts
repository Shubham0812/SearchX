import { Injectable } from '@angular/core';
import { IContent, IArtist } from "../models/content-model";


@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  content: IContent[] = [
    {
      name: "Machayenge",
      thumbnail: "assets/thumbnail/music/songs/emiway-machayenge.jpg",
      mimeType: "Song",
      artist: "Emiway"
    },
    {
      name: "Buniyaad",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-buniyaad.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary"
    },
    {
      name: "Shotgun",
      thumbnail: "assets/thumbnail/music/songs/george-ezra-shotgun.jpg",
      mimeType: "Song",
      artist: "George Ezra"
    },
    {
      name: "Good things fall apart",
      thumbnail: "assets/thumbnail/music/songs/illenium-good-things.jpg",
      mimeType: "Song",
      artist: "Illenium"
    },
    {
      name: "Birds",
      thumbnail: "assets/thumbnail/music/songs/imagine-dragons-birds.jpg",
      mimeType: "Song",
      artist: "Imagine Dragons"
    },
    {
      name: "Azadi",
      thumbnail: "assets/thumbnail/music/songs/gully-boy-azadi.jpg",
      mimeType: "Song",
      artist: "Gully Boy"
    },
    {
      name: "Yahin Hoon Main",
      thumbnail:
        "assets/thumbnail/music/songs/ayushmann-khurrana-yahin-hoon-main.jpg",
      mimeType: "Song",
      artist: "Ayushmaan Khurrana"
    },
    {
      name: "New Divide",
      thumbnail: "assets/thumbnail/music/songs/linkin-park-new-divide.jpg",
      mimeType: "Song",
      artist: "Linkin Park"
    },
    {
      name: "Bad Guy",
      thumbnail: "assets/thumbnail/music/songs/billie-eilish-bad-guy.jpg",
      mimeType: "Song",
      artist: "Billie Eilish"
    },
    {
      name: "Marz",
      thumbnail: "assets/thumbnail/music/songs/yellow-diary-marz.jpg",
      mimeType: "Song",
      artist: "The Yellow Diary"
    },
    {
      name: "She Don't Know",
      thumbnail: "assets/thumbnail/music/songs/millind-gaba-she-dont-know.jpg",
      mimeType: "Song",
      artist: "Millind Gaba"
    },
    {
      name: "Bekhayali",
      thumbnail: "assets/thumbnail/music/songs/kabir-singh-bekhayali.jpg",
      mimeType: "Song",
      artist: "Kabir Singh"
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

  constructor() {}

  getContent(): IContent[] {
    return this.content;
  }

  getArtists(): IArtist[] {
    return this.artist;
  }
}
