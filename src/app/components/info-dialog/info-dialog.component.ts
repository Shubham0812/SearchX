import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ISong, ITracks } from "../../models/content-model";
import { IToDo } from "../../models/to-do-model";
import { ToDoService } from "../../services/to-do.service";
import { DataFetchService } from "src/app/services/data-fetch.service";
@Component({
  selector: "app-info-dialog",
  templateUrl: "./info-dialog.component.html",
  styleUrls: ["./info-dialog.component.scss"]
})
export class InfoDialogComponent implements OnInit {
  constructor(
    private toDoSvc: ToDoService,
    public dataFetchSvc: DataFetchService,
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISong
  ) {
    console.log("dialog open", data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  bookmark(trackId: number, track?: ITracks) {
    console.log("bookmark", trackId, track);

    if (!this.dataFetchSvc.bookmarkContent[trackId]) {
      let data: IToDo;
      if (track.biggerThumbnail) {
        data = {
          name: track.trackName,
          image: track.biggerThumbnail,
          id: track.trackId,
          type: "Song"
        };
      } else {
        data = {
          name: track.trackName,
          image: track.thumbnail,
          id: track.trackId,
          type: "Song"
        };
      }
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(trackId);
    }
    this.dataFetchSvc.bookmarkContent[trackId] = !this.dataFetchSvc
      .bookmarkContent[trackId];
  }
}
