const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/Develop/public/"));

//* / is equal to home page then /....
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/notes", function (req, res) {
  res.send("/Develop/public/notes.html");
});

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// require("./startup/prod")(app);
// require("./assets/index.html")(app);
// require("./assets/notes.html")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
