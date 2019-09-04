import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ISong, ITracks } from "../../models/content-model";
import { IToDo } from "../../models/to-do-model";
import { ToDoService } from "../../services/to-do.service";
@Component({
  selector: "app-info-dialog",
  templateUrl: "./info-dialog.component.html",
  styleUrls: ["./info-dialog.component.scss"]
})
export class InfoDialogComponent implements OnInit {
  bookmarkPressed = false;
  bookmarkContent = [];
  constructor(
    private toDoSvc: ToDoService,
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISong
  ) {
    this.bookmarkContent[data.trackId] = false;
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

  bookmark(trackId: number, track?: ITracks) {
    console.log("bookmark", trackId, track);

    if (!this.bookmarkContent[trackId]) {
      const data: IToDo = {
        name: track.trackName,
        image: track.thumbnail,
        id: track.trackId,
        type: "Song"
      };
      this.toDoSvc.toDoList.push(data);
    } else {
      this.toDoSvc.removeFromToDo(trackId);
    }

    this.bookmarkContent[trackId] = !this.bookmarkContent[trackId];
    console.log("Check svc", this.toDoSvc.toDoList);
  }
}
