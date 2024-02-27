# Note Taker Starter Code
_________________________________

## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears


## Overview

This is a note taking application that allows the user to view, add and delete notes.

## Features

- UI query 
- Event storage 
- View saved notes as well as add new ones
- Usage of local storage
- Usage of express

## How to Use

1. **Get Started**: Click the "Get Started" button.
2. **View Existing Notes**: On the left hand side of the screen there is a list of stored notes that the user has added. 
3. **Retain Data**: Feel free to refresh the page and still have the notes stored. 
4.  **Add Notes**: Enter a title for your note into the Title field and write out your note in the Text area. Then press the "Save Note" button or hit Enter if you are done
5. **Delete Note**: Click the trash can button to delete the selected note. 

## Technologies Used

- HTML
- CSS
- JavaScript
- Express

## Setup

1. Clone the repository to your local machine.
2. Run with "node server" in the command line.
3. Access in your browser by using localhost:3001

## Application Structure

- `index.html`: Main HTML file.
- `style.css`: Stylesheet for styling the application.
- `script.js`: JavaScript file containing the application logic.

## Issues and Future Modifications
- **Deleting**: The application currently has the ability to delete on the front end but not on the back end. I would like to add this functionality in the future
- **Saving**:  The app currently saves data when you close the window or navigate away from the site. Preferably this application should add notes upon the click of the "save note" button rather than upon the refreshing of the page. 

## Contributions

Contributions are welcome! If you find any issues or want to enhance the application, submit a pull request. Assistance was received from both my TA as well as instructor. Shout out to Dennis Itua and Tom Gold. I left the code I had initially created but it would not launch with heroku. It only worked in the terminal for some odd reason so I redid it with the code implemented. It is odd as to why the example delete functionality works and it does not with mine.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
