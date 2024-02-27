// const router = require('express').Router();
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const db = require('../db/db.json');
// // const store = require('../db/store');

// //needed to add the get to add the ability to read the file
// router.get('/notes', (req,res) =>{
//     fs.readFile('db/db.json', 'utf8', (error,data) => {
//         error ? console.error(error) : console.log(data);
//         //console.log("PARSED: ", JSON.parse(data))
//         res.json(JSON.parse(data))
//     });
// });

// //needed to add the post to be able to add all notes with the save button
// router.post('/notes', (req,res) =>{
//     const { title, text } = req.body;
//     const newObj = {
//         id: uuidv4(),
//         title,
//         text
//     }
//     const payload = [...db, newObj]
//     fs.writeFileSync('db/db.json', JSON.stringify(payload), (error,data) => {
//         error ? console.error(error) : console.log(data);
//         res.json(JSON.parse(data))
//     });
// });

// //needed to delete specific notes; I could not have done this without the help of the solution code 
// //I tried to implement the same method as above but could not decipher
// router.delete('/notes/:id', (req, res) => {
//     const noteId = req.params.id;
  
//     // Read the existing notes from the database file
//     fs.readFile('db/db.json', 'utf8', (err, jsonString) => {
//       if (err) {
//         console.log("Error reading file:", err);
//         return;
//       }
  
//       // Parse the JSON string into an array of notes
//       const notes = JSON.parse(jsonString);
  
//       // Find the index of the note with the specified id
//       const noteIndex = notes.findIndex(note => note.id === noteId);
  
//       // If the note was not found, return a 404 error
//       if (noteIndex === -1) {
//         res.status(404).send('Note not found');
//         return;
//       }
  
//       // Remove the note from the array
//       notes.splice(noteIndex, 1);
  
//       // Write the updated array of notes back to the database file
//       fs.writeFile('db/db.json', JSON.stringify(notes), (err, data) => {
//         if (err) {
//           console.log("Error writing file:", err);
//           return;
//         }
  
//         console.log("File written successfully!");
//         res.json(notes);
//       });
//     });
//   });
  

const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
