const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('dist'));

app.get('/api', (req, res) => {
  console.log('communicating...');
  res.send('Looks successful');
});

app.listen(5000, () => console.log('Stitching on port 5000'));
