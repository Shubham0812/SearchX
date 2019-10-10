
# SearchX

Web Page created with Angular 8, which helps the user to search for different types of content and save them into their personalized list. 

## Motivation

This project was created for demonstrating my Angular skills, the Jobs API was provided by BYJU's.


## Technologies Used

 - Angular 8
 - Typescript
 - HTML5 & SCSS
 
 ## Features
 
 - Clean and simple user interface.
 - Users can easily search for contents and find information about them.
 - Users can explore different categories with up to date information.

## Code Example

 Adds / removes the selected track from the user's personalized list.

    bookmark(trackId: number, track?: ITracks) {

    if (!this.dataFetchSvc.bookmarkContent[trackId]) {
      let data: IToDo;
      if (track.biggerThumbnail) {
        data = {
          name: track.trackName,
          image: track.biggerThumbnail,
          id: track.trackId,
          type: "Music",
          subType: 'Song'
        };
      } else {
        data = {
          name: track.trackName,
          image: track.thumbnail,
          id: track.trackId,
          type: "Music",
          subType: 'Song'
        };
      }
      this.toDoSvc.addToDo(data);
    } else {
      this.toDoSvc.removeFromToDo(trackId);
    }
    this.dataFetchSvc.bookmarkContent[trackId] = !this.dataFetchSvc
      .bookmarkContent[trackId];
    }


## How to use ?

Download the zip file or clone the project.

#### Installing

 - Run `npm install` to install the necessary dependencies. 
 - Run `ng serve -o`  in the terminal to run the project.

#### Prerequisites

- An active internet connection.
- Node JS.
- Modern Browser such as Edge, Chrome, Safari, Firefox.


## Credits

**©** **Shubham Kumar Singh** | *2019*
