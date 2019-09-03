import { Injectable } from '@angular/core';
import { IToDo } from '../models/to-do-model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoList: IToDo[];

  constructor() { }


  addToDo(content: IToDo) {
    this.toDoList.push(content);
  }

  displayToDo() {
    console.log('To-Do List', this.toDoList);
  }

  removeFromToDo() {
    console.log('Removed call');
  }
}
