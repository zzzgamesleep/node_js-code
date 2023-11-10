const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Correct the import

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));
// HTTP logger
app.use(morgan('combined'));

// Create an instance of express-handlebars
const hbs = exphbs.create({
  extname: '.hbs',
  /* your other configuration options here */
});

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
