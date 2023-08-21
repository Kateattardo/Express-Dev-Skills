// Require modules
const express = require('express');
const path = require('path');

// require the skills "database"
const todoDb = require('./data/skills-db');
  
// Create the Express app
const app = express();
  
// Configure the app (app.set)
  
  
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function (req, res) {
  res.redirect('home');
});

app.get('/skills', function(req, res) {
    res.render('skills/index', {
      todos: todoDb.getAll()
    });
  });

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
