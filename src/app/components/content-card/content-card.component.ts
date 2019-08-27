import { Component, OnInit, Input } from "@angular/core";
import { IContent, IArtist } from "../../models/content-model";

@Component({
  selector: "app-content-card",
  templateUrl: "./content-card.component.html",
  styleUrls: ["./content-card.component.scss"]
})
export class ContentCardComponent implements OnInit {
  @Input() content: IContent;
  @Input() artist: IArtist;

  constructor() {}

  ngOnInit() {}

  focusImage() {}
}
