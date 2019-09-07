import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IArtist, IAlbums } from "src/app/models/content-model";
import { IToDo } from "../../models/to-do-model";
import { ToDoService } from "../../services/to-do.service";
import { DataFetchService } from "src/app/services/data-fetch.service";

@Component({
  selector: "app-album-info-dialog",
  templateUrl: "./album-info-dialog.component.html",
  styleUrls: ["./album-info-dialog.component.scss"]
})
export class AlbumInfoDialogComponent implements OnInit {
  bookmarkPressed = false;
  bookmarkContent = [];

  constructor(
    private toDoSvc: ToDoService,
    public dataFetchSvc: DataFetchService,
    public dialogRef: MatDialogRef<AlbumInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IArtist
  ) {
    console.log("dialog open", data);
    this.bookmarkContent[data.artistId] = false;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.data.albums.forEach(album => {
      this.bookmarkContent[album.albumId] = false;
    });
  }

  bookmark(albumId: number, album?: IAlbums) {
    console.log("bookmark album", albumId, album);

    if (!this.dataFetchSvc.bookmarkContent[albumId]) {
      const data: IToDo = {
        name: album.albumName,
        image: album.albumImage,
        id: album.albumId,
        type: "Music",
        subType: "Album"
      };
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(albumId);
    }

    this.dataFetchSvc.bookmarkContent[albumId] = !this.dataFetchSvc
      .bookmarkContent[albumId];
    console.log("Check svc", this.toDoSvc.toDoList);
  }

  bookmarkArtist(artistId: number, artist?: IArtist) {
    console.log("bookmark", artistId, artist);

    if (!this.dataFetchSvc.bookmarkContent[artistId]) {
      const data: IToDo = {
        name: artist.name,
        image: artist.thumbnail,
        id: artist.artistId,
        type: "Music",
        subType: "Artist"
      };
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(artistId);
    }

    this.dataFetchSvc.bookmarkContent[artistId] = !this.dataFetchSvc
      .bookmarkContent[artistId];
    console.log("Check svc", this.toDoSvc.toDoList);
  }
}
