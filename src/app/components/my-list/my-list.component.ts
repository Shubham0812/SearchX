import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../../services/to-do.service";
import { IToDo } from "src/app/models/to-do-model";
@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.scss"]
})
export class MyListComponent implements OnInit {
  showAll = true;
  savedList: IToDo[] = [];
  constructor(private toDoSvc: ToDoService) {}

  ngOnInit() {
    this.savedList = this.toDoSvc.toDoListData();
  }

  toggleData(tab: string) {
    this.showAll = true;
  }
}
