// ========== Necessary dependencies ========== //
const router = require("express").Router();
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getNotes = () => {
  return readFile("./db/db.json", "utf8").then((notes) => {
    return JSON.parse(notes);
  });
};

const addNote = (note) => {
  const noteId = uuidv4();
  const newNote = {
    title: note.title,
    text: note.text,
    id: noteId
  };
  return getNotes().then((notes) => {
    const allNotes = notes;
    allNotes.push(newNote);
    writeFile("./db/db.json", JSON.stringify(allNotes));
    return newNote;
  });
};

const removeNotes = (id) => {
  return getNotes().then((notes) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    writeFile("./db/db.json", JSON.stringify(filteredNotes));
    return id;
  });
};

// ========== API call to the notes page then sends results to the browser ========== //
router.get("/api/notes", (req, res) => {
  getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// ========== Writes new note to the json file ========== //
router.post("/api/notes", (req, res) => {
  addNote(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// ========== Deletes notes ========== //
router.delete("/api/notes/:id", (req, res) => {
  let noteId = req.params.id;
  removeNotes(noteId)
    .then((id) => {
      res.json({
          success: true,
          id: id
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
