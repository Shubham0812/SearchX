import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/content-model';
import { DataFetchService } from "../../services/data-fetch.service";

@Component({
  selector: "app-movie-result",
  templateUrl: "./movie-result.component.html",
  styleUrls: ["./movie-result.component.scss"]
})
export class MovieResultComponent implements OnInit {
  popularMovies: IMovie[];
  constructor(private dataFetchSvc: DataFetchService) {
    this.popularMovies = this.dataFetchSvc.getPopularMovies();

    this.dataFetchSvc.fillBookmarkFromStorage();
    this.dataFetchSvc.changeLoadState(false);

    console.log(
      "Check bookcontent",
      this.dataFetchSvc.getBookmarkData(),
      this.popularMovies
    );
  }
  ngOnInit() {}
}
