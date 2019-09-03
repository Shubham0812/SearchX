import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ISong } from "../../models/content-model";

@Component({
  selector: "app-info-dialog",
  templateUrl: "./info-dialog.component.html",
  styleUrls: ["./info-dialog.component.scss"]
})
export class InfoDialogComponent implements OnInit {
  bookmarkPressed = false;
  bookmarkContent = [];
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISong
  ) {
    console.log("dialog open", data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.data.tracks.forEach(track => {
      this.bookmarkContent[track.trackId] = false;
    });
  }

  bookmark(trackId: number) {
    console.log("bookmark");
    this.bookmarkContent[trackId] = !this.bookmarkContent[trackId];
  }
}
