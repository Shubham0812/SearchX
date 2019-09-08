import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ISong, IArtist } from "../../models/content-model";
import { DataFetchService } from "../../services/data-fetch.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  searchQuery: string;

  contents: ISong[];
  latestSongs: ISong[];
  artists: IArtist[];

  constructor(private dataFetchSvc: DataFetchService) {
    this.contents = this.dataFetchSvc.getContent();
    this.artists = this.dataFetchSvc.getArtists();
    this.latestSongs = this.dataFetchSvc.getLatestContent();
    this.dataFetchSvc.fillBookmarkFromStorage();
    this.dataFetchSvc.changeLoadState(false);

    console.log(
      "Check bookcontent",
      this.dataFetchSvc.getBookmarkData(),
      this.dataFetchSvc.bookmarkContent.length
    );
  }

  ngOnInit() {}
}
