import { Component, OnInit, Input } from "@angular/core";
import { ISong, IArtist, IMovie } from "../../models/content-model";
import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from "../info-dialog/info-dialog.component";
import { AlbumInfoDialogComponent } from "../album-info-dialog/album-info-dialog.component";
import { MovieInfoDialogComponent } from "../movie-info-dialog/movie-info-dialog.component";

@Component({
  selector: "app-content-card",
  templateUrl: "./content-card.component.html",
  styleUrls: ["./content-card.component.scss"]
})
export class ContentCardComponent implements OnInit {
  @Input() content: ISong;
  @Input() artist: IArtist;
  @Input() movie: IMovie;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  focusImage() {}

  contentClicked(content: ISong) {
    console.log("Content", content);
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: "70%",
      data: content
    });
  }

  artistClicked(artist: IArtist) {
    console.log("Arist", artist);
    const dialogRef = this.dialog.open(AlbumInfoDialogComponent, {
      width: "70%",
      data: artist
    });
  }

  movieClicked(movie: IMovie) {
    console.log("Movie", movie);
    const dialogRef = this.dialog.open(MovieInfoDialogComponent, {
      width: "70%",
      data: movie
    });
  }
}
