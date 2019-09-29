import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EventEmitter } from "events";
import { DataFetchService } from "../../services/data-fetch.service";
import { MatSnackBar } from "@angular/material/snack-bar";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  @Output() showLoading = new EventEmitter();
  searched: boolean = false;

  // searchQuery = new FormControl("");

  searchForm = new FormGroup({
    searchQuery: new FormControl("")
  });

  tiles: Tile[] = [
    { text: "Songs", cols: 3, rows: 2, color: "#212121" },
    { text: "Movies", cols: 1, rows: 4, color: "#212121" },
    { text: "Games", cols: 1, rows: 2, color: "#212121" },
    { text: "Books", cols: 2, rows: 2, color: "#121212" }
  ];

  constructor(
    private router: Router,
    private dataFetchSvc: DataFetchService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {}

  onSubmit() {
    if (
      this.searchForm.controls.searchQuery.value === "" ||
      this.searchForm.controls.searchQuery.value === null
    ) {
      this.dataFetchSvc.changeLoadState(true);
      this.searchForm.reset();
      setTimeout(() => {
        this.snackBar.open("Please enter Something");
        this.dataFetchSvc.changeLoadState(false);
      }, 200);
    } else if (
      this.searchForm.controls.searchQuery.value.toLowerCase().includes("music") ||
      this.searchForm.controls.searchQuery.value.toLowerCase().includes("song")
    ) {
      this.dataFetchSvc.changeLoadState(true);

      setTimeout(() => {
        this.router.navigate(["/search", "music"]);
      }, 600);
    } else if (
      this.searchForm.controls.searchQuery.value.includes("movie") ||
      this.searchForm.controls.searchQuery.value.includes("Movie")
    ) {
      this.dataFetchSvc.changeLoadState(true);

      setTimeout(() => {
        this.router.navigate(["/search/movies"]);
      }, 600);
    } else {
      this.dataFetchSvc.changeLoadState(true);
      this.searchForm.reset();
      setTimeout(() => {
        //  this.snackBar.open("");
        this.dataFetchSvc.changeLoadState(false);
      }, 200);
    }
  }

  gridClicked(data: string) {
    if (data.toLowerCase() === "music") {
      this.dataFetchSvc.changeLoadState(true);
      setTimeout(_ => {
        this.router.navigate(["/search/music"]);
      }, 600);
    } else if (data.toLowerCase() === "movie") {
      this.dataFetchSvc.changeLoadState(true);
      setTimeout(_ => {
        this.router.navigate(["/search/movie"]);
      }, 600);
    }
  }
}
