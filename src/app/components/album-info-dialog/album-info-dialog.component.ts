import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IArtist, IAlbums } from "src/app/models/content-model";
import { IToDo } from '../../models/to-do-model';
import { ToDoService } from '../../services/to-do.service';
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
    public dialogRef: MatDialogRef<AlbumInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IArtist
  ) {
    console.log("dialog open", data);
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
    console.log("bookmark", albumId, album);

    if (!this.bookmarkContent[albumId]) {
      const data: IToDo = {
        name: album.albumName,
        image: album.albumImage,
        id: album.albumId,
        type: "Album"
      };
      this.toDoSvc.toDoList.push(data);
    } else {
      this.toDoSvc.removeFromToDo(albumId);
    }

    this.bookmarkContent[albumId] = !this.bookmarkContent[albumId];
    console.log("Check svc", this.toDoSvc.toDoList);
  }

  bookmarkArtist(artistId: number, artist?: IArtist) {
    console.log("bookmark", artistId, artist);

    if (!this.bookmarkContent[artistId]) {
      const data: IToDo = {
        name: artist.name,
        image: artist.thumbnail,
        id: artist.artistId,
        type: "Artist"
      };
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(artistId);
    }

    this.bookmarkContent[artistId] = !this.bookmarkContent[artistId];
    console.log("Check svc", this.toDoSvc.toDoList);
  }
}
