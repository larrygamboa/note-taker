//Necessary dependencies
const express = require("express");
const path = require("path");

//Define PORT
const PORT = process.env.PORT || 3000;

//Create instance of express server - object
const server = express();

//Body parser
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//Server need to share the public folder to the client
server.use(express.static(path.join(__dirname,"/public")));

//Attach routes
server.use(require("./routes/htmlRoutes.js"));
server.use(require("./routes/apiRoutes.js"));

//Start server
server.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`);
});