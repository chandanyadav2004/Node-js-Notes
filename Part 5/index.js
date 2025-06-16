const path = require('path'); // ✅ You forgot this line

const express = require('express');
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route: Home page
app.get("/", function(req, res) {
    res.render("index"); // make sure views/index.ejs exists
});

// Route: Profile with username and age
app.get("/profile/:username/:age", function(req, res) {
    res.send(`Welcome ${req.params.username}, Age: ${req.params.age}`);
});

// Route: Profile with only username
app.get("/profile/:username", function(req, res) {
    res.send(`Welcome ${req.params.username}`);
});



// Start server
app.listen(3000, function() {
    console.log("It's running on http://localhost:3000");
});
