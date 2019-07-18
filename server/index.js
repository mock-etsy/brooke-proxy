const express = require('express');
const cors = require('cors');
const { port, host } = require('../config.js');
const app = express();

app.use('/', express.static('./dist'));
app.use(express.json());
app.use(cors());

const PORT = port || 5001;
const HOST = host || '0.0.0.0';

app.get(
  `http://regretsy-item-details.us-east-2.elasticbeanstalk.com/details/:id`,
  (req, res) => {
    res.send('hello world');
  }
);

app.listen(PORT, HOST, () => {
  console.log(`Brooke's proxy server listening on host ${HOST} port ${PORT}`);
});
