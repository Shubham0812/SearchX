import { Injectable } from "@angular/core";
import { IToDo } from "../models/to-do-model";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  toDoList: IToDo[] = [];

  constructor() {
    this.toDoList = this.fetchToDoListData();
  }

  addToDo(content: IToDo) {
    this.toDoList.push(content);
    this.saveToLocalStorage();
  }

  removeFromToDo(id: number) {
    console.log("Removed call");
    this.toDoList = this.toDoList.filter(element => {
      return element.id !== id;
    });
    this.saveToLocalStorage();
  }

  fetchToDoListData(): IToDo[] {
    const fetchData = localStorage.getItem("my-list-data");
    if (fetchData === null) {
      return this.toDoList;
    } else {
      return JSON.parse(fetchData);
    }
  }

  saveToLocalStorage() {
    const stringify = JSON.stringify(this.toDoList);
    localStorage.setItem("my-list-data", stringify);
  }
}
