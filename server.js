//get necessary dependencies
const express = require("express");
const path = require("path");

//define PORT
const PORT = process.env.PORT || 3000;

//create instance of express server - object
const server = express();

//body parser
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//server need to share the public folder to the client
server.use(express.static(path.join(__dirname,"/public")));

//attch routes
server.use(require("./routes/htmlRoutes.js"));
server.use(require("./routes/apiRoutes.js"));

//start server
server.listen(PORT, () => {
    console.log(`Listenidng to PORT: ${PORT}`);
});