// Necessary dependencies
const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// ============================================================
// Initialize an array of data
let notesArray = [];

// ============================================================
// API call to the notes page then sends results to the browser
// as an array of objects
router.get("/api/notes", (req, res) => {
    try {
        // Reads the notes from db.json file
        notesArray = fs.readFileSync("./db/db.json", "utf8");
        console.log("hello!");
        // Parse data so notesArray is an array of objects
        notesArray = JSON.parse(notesArray);
        // Catch errors
    } catch (err) {
        console.log(err);
    }
    // Send objects to the browser
    res.json(notesArray);
});

// ============================================================
// Writes new note to the json file
router.post("/api/notes", (req, res) => {
    try {
        // Reads the notes from db.json file
        notesArray = fs.readFileSync("./db/db.json", "utf8");
        console.log(notesArray);
        // Parse data to get an array of objects
        notesArray = JSON.parse(notesArray);
        // Set new notes id
        req.body.id = notesArray.length;
        // Add the new note to the array objects
        notesArray.push(req.body);
        // Stringify to write note to the file
        notesArray = JSON.stringify(notesArray);
        // Writes new note to file
        fs.writeFile("./db/db.json", notesArray, "utf8", function(err) {
            if (err) throw err;
        });
        // Send note back to the browser
        res.json(JSON.parse(notesArray));
    } catch (err) {
        throw err;
    }
});

// ============================================================
// Delete a note
router.delete("/api/notes/:id", (req, res) => {
    try {
        // Reads the notes from db.json file
        notesArray = fs.readFileSync("./db/db.json", "utf8");
        // Parse data to get an array of objects
        notesArray = JSON.parse(notesArray);
        // Delete the old note from the array
        notesArray = notesArray.filter(function(note) {
        return note.id != req.params.id;
        });
        // Stringify to write note to the file
        notesArray = JSON.stringify(notesArray);
        // Writes new note to file
        fs.writeFile("./db/db.json", notesArray, "utf8", function(err) {
            if (err) throw err;
        });
        // Send note back to the browser
        res.send(JSON.parse(notesArray));
    } catch (err) {
        throw err;
    }
});

module.exports = router;
