import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IArtist } from 'src/app/models/content-model';


@Component({
  selector: "app-album-info-dialog",
  templateUrl: "./album-info-dialog.component.html",
  styleUrls: ["./album-info-dialog.component.scss"]
})
export class AlbumInfoDialogComponent implements OnInit {
  bookmarkPressed = false;
  constructor(
    public dialogRef: MatDialogRef<AlbumInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IArtist
  ) {
    console.log("dialog open", data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  bookmark() {
    console.log("bookmark");
    this.bookmarkPressed = !this.bookmarkPressed;
  }
}
