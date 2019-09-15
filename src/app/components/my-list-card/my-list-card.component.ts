import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IToDo } from "src/app/models/to-do-model";
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: "app-my-list-card",
  templateUrl: "./my-list-card.component.html",
  styleUrls: ["./my-list-card.component.scss"]
})
export class MyListCardComponent implements OnInit {
  @Input() cardData: IToDo;
  @Output() cardRemoved = new EventEmitter<boolean>();
  constructor(private toDoSvc: ToDoService) {
  }

  ngOnInit() {
    // console.log("check card -> ", this.cardData);
  }

  remove(id: number) {
    this.toDoSvc.removeFromToDo(id);
    this.cardRemoved.emit(true);
  }
}
