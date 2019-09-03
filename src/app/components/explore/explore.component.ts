import { Component, OnInit } from '@angular/core';
import { DataFetchService } from "../../services/data-fetch.service";
import { Router } from "@angular/router";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.scss"]
})
export class ExploreComponent implements OnInit {
  constructor(private dataFetchSvc: DataFetchService, private router: Router) {}

  tiles: Tile[] = [
    { text: "Songs", cols: 3, rows: 2, color: "#212121" },
    { text: "Movies", cols: 1, rows: 4, color: "#212121" },
    { text: "Games", cols: 1, rows: 2, color: "#212121" },
    { text: "Books", cols: 2, rows: 2, color: "#121212" }
  ];

  ngOnInit() {}

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
