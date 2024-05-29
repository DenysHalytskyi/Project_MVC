const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const filmRoutes = require('./routes/filmRoutes');
app.use('/', filmRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);//3000
});
