import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { IContent, IArtist } from "../../models/content-model";
import { DataFetchService } from "../../services/data-fetch.service";
import { ActivatedRoute } from "@angular/router";
import { debounceTime, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  paramSubscription: Subscription | null = null;
  searchQuery: string;
  disableNext: boolean;
  disablePrev: boolean;
  scrollObserver: Subscription;

  contents: IContent[];
  artists: IArtist[];

  @ViewChild("cardContents", { read: ElementRef, static: false })
  public cardContents: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private dataFetchSvc: DataFetchService
  ) {
       this.contents = this.dataFetchSvc.getContent();
       console.log(this.contents);
       this.disablePrev = true;
       this.artists = this.dataFetchSvc.getArtists();
       console.log(this.artists);

       setTimeout(() => {
         this.initializeObserver();
       }, 500);
  }

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      console.log(params.get("query"));
    });
  }

  initializeObserver() {
    this.scrollObserver = fromEvent(this.cardContents.nativeElement, "scroll")
      .pipe(debounceTime(200))
      .pipe(throttleTime(200))
      .subscribe((event: Event) => {
        console.log("Scroll Event", event);
        this.updateNavigationButtonStatus(event.srcElement as HTMLElement);
      });
  }

  public scrollRight(): void {
    const clientWidth = this.cardContents.nativeElement.clientWidth;
    this.cardContents.nativeElement.scrollTo({
      left: this.cardContents.nativeElement.scrollLeft + clientWidth + 2,
      behavior: "smooth"
    });
  }

  public scrollLeft(): void {
    const clientWidth = this.cardContents.nativeElement.clientWidth;
    this.cardContents.nativeElement.scrollTo({
      left: this.cardContents.nativeElement.scrollLeft - clientWidth - 2,
      behavior: "smooth"
    });
  }

  updateNavigationButtonStatus(element: HTMLElement) {
    console.log("Client Width", element.clientWidth);
    if (element.scrollLeft === 0) {
      console.log('hehe');
      this.disablePrev = true;
    } else {
      this.disablePrev = false;
    }
    if (element.scrollWidth === element.clientWidth + element.scrollLeft) {
      console.log("exceeded");
      this.disableNext = true;
    } else {
      this.disableNext = false;
    }
  }
}
