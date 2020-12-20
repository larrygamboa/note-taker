// Necessary dependencies
const router = require("express").Router();
const path = require("path");

// ============================================================
// Routes user to notes.html page
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

// ============================================================
// Routes user to index.html page
router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = router;
