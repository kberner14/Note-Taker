const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// This middleware is responsible for constructing the
// body property on the response object passed to our route handlers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   express.static(path.join(__dirname, "./public"), { extensions: ["html"] })
// );

app.get("/", (req, res) => {
    res.json(path.join(__dirname, "./Develop/public/index.html"));
  });

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
  });

  app.get("/api/letters/:letters", (req, res) => {
      return res.json(letters)
  });

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
  