// Necessary dependencies
const router = require("express").Router();
const path = require("path");

// ============================================================
// Routes to notes page when Get Started button is clicked
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// ============================================================
// Routes default to home page.
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
