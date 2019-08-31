import { Component, OnInit, Input } from "@angular/core";
import { ISong, IArtist } from "../../models/content-model";
import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from "../info-dialog/info-dialog.component";

@Component({
  selector: "app-content-card",
  templateUrl: "./content-card.component.html",
  styleUrls: ["./content-card.component.scss"]
})
export class ContentCardComponent implements OnInit {
  @Input() content: ISong;
  @Input() artist: IArtist;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  focusImage() {}

  contentClicked(content: ISong) {
    console.log("Content", content);
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: "50%",
      height: "60%",
      data: {
        name: content.name,
        thumbnail: content.thumbnail,
        mimeType: content.mimeType,
        artist: content.artist,
        tracks: content.tracks,
      }
    });
  }
}
