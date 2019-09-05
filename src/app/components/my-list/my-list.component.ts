import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../../services/to-do.service";
import { IToDo } from "src/app/models/to-do-model";
@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.scss"]
})
export class MyListComponent implements OnInit {
  showAll = false;
  savedList: IToDo[] = [];
  constructor(private toDoSvc: ToDoService) {}

  ngOnInit() {
    this.savedList = this.toDoSvc.toDoListData();
    console.log("Check list", this.savedList);
  }

  toggleData(tab: string) {
    this.showAll = true;
  }
}
