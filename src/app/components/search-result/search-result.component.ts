import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { IContent, IArtist } from "../../models/content-model";
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

  contents: IContent[];
  artists: IArtist[];

  constructor(
    private route: ActivatedRoute,
    private dataFetchSvc: DataFetchService
  ) {
    this.contents = this.dataFetchSvc.getContent();
    console.log(this.contents);
    this.artists = this.dataFetchSvc.getArtists();
    console.log(this.artists);
    this.dataFetchSvc.changeLoadState(false);
  }

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      console.log(params.get("query"));
    });
  }
}
