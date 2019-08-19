import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  searched: boolean = false;
  loading: boolean = false;

  // searchQuery = new FormControl("");

  searchForm = new FormGroup({
    searchQuery: new FormControl("")
  });

  constructor(private router: Router) {
    console.log("Constructor called");
  }

  ngOnInit() {}

  onSubmit() {
    if (this.searchForm.value !== "") {
      console.log("Submit called", this.searchForm.controls.searchQuery.value);
      this.searched = true;
      // this.searchForm.reset();
    }
    if (this.searchForm.controls.searchQuery.value.includes("song")) {
      console.log("song query");
      setTimeout(() => {
        this.router.navigate(["/search", "song"]);
      }, 600);
    }
  }
}
