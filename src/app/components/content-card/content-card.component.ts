import { Component, OnInit, Input } from "@angular/core";
import { IContent } from "../../models/content-model";

@Component({
  selector: "app-content-card",
  templateUrl: "./content-card.component.html",
  styleUrls: ["./content-card.component.scss"]
})
export class ContentCardComponent implements OnInit {
  @Input() content: IContent;

  constructor() {}

  ngOnInit() {}
}
