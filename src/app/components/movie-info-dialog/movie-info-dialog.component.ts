import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IToDo } from "../../models/to-do-model";
import { ToDoService } from "../../services/to-do.service";
import { DataFetchService } from "src/app/services/data-fetch.service";
import { IMovie } from 'src/app/models/content-model';

@Component({
  selector: "app-movie-info-dialog",
  templateUrl: "./movie-info-dialog.component.html",
  styleUrls: ["./movie-info-dialog.component.scss"]
})
export class MovieInfoDialogComponent implements OnInit {
  constructor(
    private toDoSvc: ToDoService,
    public dataFetchSvc: DataFetchService,
    public dialogRef: MatDialogRef<MovieInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie
  ) {
  }

  ngOnInit() {}
  onClose(): void {
    this.dialogRef.close();
  }

  bookmarkMovie(movieId: number, movie?: IMovie) {

    if (!this.dataFetchSvc.bookmarkContent[movieId]) {
      const data: IToDo = {
        name: movie.movieName,
        image: movie.thumbnail,
        id: movie.movieId,
        type: "Movie",
        subType: ""
      };
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(movieId);
    }

    this.dataFetchSvc.bookmarkContent[movieId] = !this.dataFetchSvc.bookmarkContent[movieId];
  }
}
