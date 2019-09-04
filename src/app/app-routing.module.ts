import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ExploreComponent } from "./components/explore/explore.component";
import { MyListComponent } from "./components/my-list/my-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "search/:query",
    component: SearchResultComponent
  },
  {
    path: "myList",
    component: MyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
