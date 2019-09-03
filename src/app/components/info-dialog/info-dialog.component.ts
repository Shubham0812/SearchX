import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { ISong } from "../../models/content-model";

@Component({
  selector: "app-info-dialog",
  templateUrl: "./info-dialog.component.html",
  styleUrls: ["./info-dialog.component.scss"]
})
export class InfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISong
  ) {
    console.log("dialog open", data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  bookmark() {
    console.log('bookmark');
  }
}
