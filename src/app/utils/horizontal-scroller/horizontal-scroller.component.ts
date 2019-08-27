import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-horizontal-scroller",
  templateUrl: "./horizontal-scroller.component.html",
  styleUrls: ["./horizontal-scroller.component.scss"]
})
export class HorizontalScrollerComponent implements OnInit {
  disableNext: boolean;
  disablePrev: boolean;
  scrollObserver: Subscription;

  @ViewChild("cardContents", { read: ElementRef, static: false })
  public cardContents: ElementRef;

  constructor() {
    this.disablePrev = true;
    setTimeout(() => {
      this.initializeObserver();
    }, 500);
  }

  ngOnInit() {}

  initializeObserver() {
    this.scrollObserver = fromEvent(this.cardContents.nativeElement, "scroll")
      .pipe(debounceTime(200))
      .pipe(throttleTime(200))
      .subscribe(_ => {
        this.updateNavigationButtonStatus(this.cardContents.nativeElement as HTMLElement);
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
      console.log("hehe");
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
