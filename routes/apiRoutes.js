const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

//needed to add the get to add the ability to read the file
router.get('/notes', (req,res) =>{
    fs.readFile('db/db.json', 'utf8', (error,data) => {
        error ? console.error(error) : console.log(data);
        //console.log("PARSED: ", JSON.parse(data))
        res.json(JSON.parse(data))
    });
});

//needed to add the post to be able to add all notes with the save button
router.post('/notes', (req,res) =>{
    const { title, text } = req.body;
    const newObj = {
        id: uuidv4(),
        title,
        text
    }
    const payload = [...db, newObj]
    fs.writeFileSync('db/db.json', JSON.stringify(payload), (error,data) => {
        error ? console.error(error) : console.log(data);
        res.json(JSON.parse(data))
    });
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    // Logic to delete the note with the given ID from the database
    // This could involve interacting with a database or some other data source
    res.json({ message: `Note with ID ${noteId} deleted successfully` });
  });

module.exports = router;