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
  fs.readFile("./Develop/db/db.json", "utf-8", function (err, data) {
    if (err) throw err;
    const noteData = JSON.parse(data);
    noteData.push(note);
    fs.writeFile(
      "./Develop/db/db.json",
      JSON.stringify(noteData),
      function (err) {
        if (err) throw err;
      }
    );
    console.log(noteData);
  });
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
