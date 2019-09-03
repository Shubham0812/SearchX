import { Component, OnInit } from "@angular/core";
import { DataFetchService } from "../app/services/data-fetch.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "SearchX";
  loading = false;
  constructor(private dataFetchSvc: DataFetchService, private router: Router) {}

  ngOnInit() {
    this.dataFetchSvc.currentState.subscribe(state => {
      console.log("Current state", state);
      this.loading = state;
    });
  }

  navigateHome() {
    this.dataFetchSvc.changeLoadState(true);
    setTimeout(() => {
      this.router.navigate(["/home"]);

      this.dataFetchSvc.changeLoadState(false);
    }, 400);
  }
}
