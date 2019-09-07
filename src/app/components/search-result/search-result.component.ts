import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { ISong, IArtist } from "../../models/content-model";
import { DataFetchService } from "../../services/data-fetch.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  paramSubscription: Subscription | null = null;
  searchQuery: string;

  contents: ISong[];
  latestSongs: ISong[];
  artists: IArtist[];

  constructor(
    private route: ActivatedRoute,
    private dataFetchSvc: DataFetchService
  ) {
    this.contents = this.dataFetchSvc.getContent();
    console.log("Check data", this.contents);
    this.artists = this.dataFetchSvc.getArtists();
    console.log(this.artists);
    this.latestSongs = this.dataFetchSvc.getLatestContent();
    this.dataFetchSvc.fillBookmarkFromStorage();
    this.dataFetchSvc.changeLoadState(false);

    console.log(
      "Check bookcontent",
      this.dataFetchSvc.getBookmarkData(),
      this.dataFetchSvc.bookmarkContent.length
    );
  }

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      console.log(params.get("query"));
    });
  }
}
