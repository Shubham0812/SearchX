import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../../services/to-do.service";
import { DataFetchService } from "../../services/data-fetch.service";
import { IToDo } from "src/app/models/to-do-model";

export interface ITypes {
  name: string;
  activated: boolean;
  subTypes: ISubType[];
}

export interface ISubType {
  name: string;
  activated: boolean;
}
@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.scss"]
})
export class MyListComponent implements OnInit {
  savedList: IToDo[] = [];
  selectedIndex = 0;
  selectedType = "All";
  selectedSubType = "";
  fetchStatus = "none";
  displayCenter = false;

  searchTabs: ITypes[] = [
    {
      name: "All",
      activated: true,
      subTypes: []
    },
    {
      name: "Music",
      activated: false,
      subTypes: [
        { name: "Songs", activated: false },
        { name: "Artists", activated: false },
        { name: "Albums", activated: false }
      ]
    },
    {
      name: "Movie",
      activated: false,
      subTypes: []
    },
    {
      name: "Books",
      activated: false,
      // subTypes: [{ name: "Author", activated: false }],
      subTypes: []
    }
  ];

  constructor(
    public toDoSvc: ToDoService,
    private dataFetchSvc: DataFetchService
  ) {
    this.savedList = this.toDoSvc.fetchToDoListData();
    // this.dataFetchSvc.shuffle(this.savedList);
    this.fetchStatus = "done";
    console.log("check saerch tabs", this.searchTabs);
  }

  ngOnInit() {
    console.log("savedList", this.savedList);
  }

  toggleData(item: string) {
    console.log("Data check", item);
    let count = 0;
    this.toggleSubData("remove");
    this.searchTabs.forEach(tab => {
      if (tab.name === item) {
        tab.activated = true;
        this.selectedIndex = count;
        this.selectedType = item;
        if (tab.name !== "All") {
          let dataFetch = this.toDoSvc.fetchToDoListData();
          dataFetch = dataFetch.filter(fetch => {
            return fetch.type === item;
          });
          this.savedList = dataFetch;
          // console.log("Check toggle", dataFetch, item);
        } else {
          this.savedList = this.toDoSvc.fetchToDoListData();
        }
        this.selectedSubType = "";
      } else {
        tab.activated = false;
      }
      count += 1;
    });
    // console.log(this.searchTabs, this.selectedIndex);
  }

  checkForCenter() {
    if (this.savedList.length > 3) {
      this.displayCenter = true;
    }
  }

  toggleSubData(item: string) {
    // console.log("Inside sub", this.searchTabs[this.selectedIndex]);
    this.searchTabs[this.selectedIndex].subTypes.forEach(subTab => {
      if (subTab.name === item) {
        subTab.activated = true;
        let dataFetch = this.toDoSvc.fetchToDoListData();
        dataFetch = dataFetch.filter(fetch => {
          if (item.charAt(item.length - 1) === "s") {
            return fetch.subType === item.substring(0, item.length - 1);
          } else {
            return fetch.subType === item;
          }
        });
        this.selectedSubType = item.substring(0, item.length - 1);
        console.log("check subtype", this.selectedSubType);
        this.savedList = dataFetch;

        console.log("after subtoggle", dataFetch);
      } else {
        subTab.activated = false;
      }
    });
  }

  refreshCards() {
    console.log("Time to refresh", this.selectedIndex);
    let dataFetch = this.toDoSvc.fetchToDoListData();
    if (this.selectedType !== "All") {
      dataFetch = dataFetch.filter(fetch => {
        return fetch.type === this.selectedType;
      });
    }
    console.log("after list", dataFetch);
    console.log("check", this.selectedSubType);
    if (this.selectedSubType !== "") {
      dataFetch = dataFetch.filter(fetch => {
        return fetch.subType === this.selectedSubType;
      });
    }
    this.savedList = dataFetch;
  }
}
