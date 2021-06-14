const express = require("express");
const path = require("path");
const fs = require("fs");
const generateUniqueId = require("generate-unique-id");

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

app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/db/db.json"));
});

app.post("/api/notes", function (req, res) {
  console.log("You made it! Yay!");
  const note = req.body;
  note.id = generateUniqueId({
    length: 4,
    useLetters: false,
  });
  console.log(note);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
