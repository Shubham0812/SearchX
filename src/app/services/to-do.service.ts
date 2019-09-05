import { Injectable } from "@angular/core";
import { IToDo } from "../models/to-do-model";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  toDoList: IToDo[] = [];

  constructor() {}

  addToDo(content: IToDo) {
    this.toDoList.push(content);
  }

  displayToDo() {
    console.log("To-Do List", this.toDoList);
  }

  removeFromToDo(id: number) {
    console.log("Removed call");
    this.toDoList = this.toDoList.filter(element => {
      return element.id !== id;
    });
  }

  toDoListData(): IToDo[] {
    return this.toDoList;
  }
}
