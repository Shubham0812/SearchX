import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EventEmitter } from "events";
import { DataFetchService } from "../../services/data-fetch.service";

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
    { text: "Songs", cols: 3, rows: 1, color: "#212121" },
    { text: "Movies", cols: 1, rows: 2, color: "#212121" },
    { text: "Games", cols: 1, rows: 1, color: "#212121" },
    { text: "Books", cols: 2, rows: 1, color: "#121212" }
  ];

  constructor(private router: Router, private dataFetchSvc: DataFetchService) {
    console.log("Constructor called");
  }

  ngOnInit() {}

  onSubmit() {
    if (this.searchForm.value !== "") {
      this.dataFetchSvc.changeLoadState(true);
      console.log("Submit called", this.searchForm.controls.searchQuery.value);
      this.searched = true;
      // this.searchForm.reset();
    }
    if (this.searchForm.controls.searchQuery.value.includes("song")) {
      console.log("song query");
      setTimeout(() => {
        this.router.navigate(["/search", "song"]);
      }, 600);
    }
  }

  gridClicked(data: string) {
    console.log("grid tile", data);
    if (data.toLowerCase() === "songs") {
      this.dataFetchSvc.changeLoadState(true);
      setTimeout(_ => {
        this.router.navigate(["/search/song"]);
      }, 600);
    }
  }
}
