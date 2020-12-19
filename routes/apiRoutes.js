const router = require("express").Router();

//get notes route
router.get("/api/notes", (req,res) => {
    //get the data - read

    //.then send the data res.json
});

//add notes route
router.post("/api/notes", (req,res) => {
    //get the data - read

    //modifigy the data if you need to - add the new note to the data - req.body 

    //write the modified data back

    //send new note res.json
});

//delete notes route
router.get("/api/notes/:id", (req,res) => {
    //get the data - read

    //modifigy the data if you need to filter out the one with the target id - id will be coming from req.params.id

    //write the data back

    //sedn back res.json sucess mesa
});

module.exports = router;