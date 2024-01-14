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

This is a note taking application that allows you to save and delete notes.

## Features

- UI city query 
- Event storage within a certain time frame
- View saved cities and retrieve weather on click
- Usage of local storage
- Usage of Open Weather Map API

## How to Use

1. **City Search**: Click the text box to search for the weather in a city. Then click search.
2. **Save City Name and Weather**: The city name is saved in local storage. As the user searches for more cities, the local storage grows. The user now has the ability to click the city and get the weather data without having to type and search.
3. **Retain Date**: Feel free to refresh the page and still have the city name stored. 

## Technologies Used

- HTML
- CSS
- JavaScript
- Open Weather Map API

## Setup

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## Application Structure

- `index.html`: Main HTML file.
- `style.css`: Stylesheet for styling the application.
- `script.js`: JavaScript file containing the application logic.

## Issues and Future Modifications
- **Styling** - would like to format the current city weather to be a bit prettier; also change forecast to have the same size containers and justify the content throughout it to make it look more symmetrical
- **Units** - change from Kelvin to Fahrenheit because users do not generally check weather in Kelvin
- **Update Search History Function** - had issues where I would append the most recent city being searched but it repeated city searches; had to clear the list before the for loop that would append to eliminate recurring city entries


## Contributions

Contributions are welcome! If you find any issues or want to enhance the application, submit a pull request. Assistance was received from both my TA as well as instructor. Shout out to Dennis Itua and Karina Guerrero. 


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
