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
  fetchStatus = 'none';
  constructor(private toDoSvc: ToDoService) {
    this.savedList = this.toDoSvc.fetchToDoListData();
    this.fetchStatus = 'done';
  }

  ngOnInit() {
    console.log("savedList", this.savedList);
  }

  toggleData(tab: string) {
    this.showAll = true;
  }
}
