const express = require("express");
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve built front end
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
}

// Setup API and Web Routes
require("./routes/routes.js")(app);

app.listen(PORT, function() {
    console.log(`Server Started on Port:${PORT}`);
});

