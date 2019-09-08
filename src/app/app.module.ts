import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  MatProgressBarModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatGridListModule,
  MatDialogModule,
} from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";

import { SearchResultComponent } from "./components/search-result/search-result.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ContentCardComponent } from "./components/content-card/content-card.component";
import { HorizontalScrollerModule } from "../app/utils/horizontal-scroller/horizontal-scroller.module";
import { InfoDialogComponent } from "./components/info-dialog/info-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { AlbumInfoDialogComponent } from './components/album-info-dialog/album-info-dialog.component';
import { ExploreComponent } from './components/explore/explore.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyListCardComponent } from './components/my-list-card/my-list-card.component';
import { MovieResultComponent } from './components/movie-result/movie-result.component';
import { MovieInfoDialogComponent } from './components/movie-info-dialog/movie-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    HomePageComponent,
    ContentCardComponent,
    InfoDialogComponent,
    AlbumInfoDialogComponent,
    ExploreComponent,
    MyListComponent,
    MyListCardComponent,
    MovieResultComponent,
    MovieInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    HorizontalScrollerModule,
    MatTabsModule
  ],
  entryComponents: [InfoDialogComponent, AlbumInfoDialogComponent, MovieInfoDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
