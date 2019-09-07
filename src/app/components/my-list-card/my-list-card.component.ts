import { Component, OnInit, Input } from "@angular/core";
import { IToDo } from "src/app/models/to-do-model";

@Component({
  selector: "app-my-list-card",
  templateUrl: "./my-list-card.component.html",
  styleUrls: ["./my-list-card.component.scss"]
})
export class MyListCardComponent implements OnInit {
  @Input() cardData: IToDo;
  constructor() {}

  ngOnInit() {
    console.log("check card -> ", this.cardData);
  }
}
