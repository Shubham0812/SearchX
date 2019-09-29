import { Component, OnInit } from "@angular/core";
import { DataFetchService } from "../../services/data-fetch.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  class: string;
}

export interface ITile {
  name: string;
  class: string;
}
@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.scss"]
})
export class ExploreComponent implements OnInit {
  tileNames: ITile[] = [
    {
      name: "Music",
      class: "mat-elevation-z6 background-songs overlay"
    },
    {
      name: "Movies",
      class: "mat-elevation-z6 background-movies overlay"
    },
    {
      name: "Games",
      class: "mat-elevation-z6 background-games overlay"
    },
    {
      name: "Books",
      class: "mat-elevation-z6 background-books overlay"
    }
  ];

  tiles: Tile[] = [
    { text: "", cols: 3, rows: 2, color: "#212121", class: "" },
    { text: "", cols: 1, rows: 4, color: "#212121", class: "" },
    { text: "", cols: 1, rows: 2, color: "#212121", class: "" },
    { text: "", cols: 2, rows: 2, color: "#121212", class: "" }
  ];

  constructor(
    private dataFetchSvc: DataFetchService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.shuffle(this.tileNames);
    let count = 0;
    this.tiles.forEach(tile => {
      tile.text = this.tileNames[count].name;
      tile.class = this.tileNames[count].class;
      count += 1;
    });

  }

  ngOnInit() {}

  gridClicked(data: string) {
    if (data.toLowerCase() === "music") {
      this.dataFetchSvc.changeLoadState(true);
      setTimeout(_ => {
        this.router.navigate(["/search/music"]);
      }, 600);
    } else if (data.toLowerCase() === "movies") {
      this.dataFetchSvc.changeLoadState(true);
      setTimeout(_ => {
        this.router.navigate(["/search/movies"]);
      }, 600);
    } else {
      this.snackBar.open("Coming Soon..");
    }
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
}
