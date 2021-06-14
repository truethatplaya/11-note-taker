const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./startup/prod")(app);
require("./assets/index.html")(app);
require("./assets/notes.html")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
