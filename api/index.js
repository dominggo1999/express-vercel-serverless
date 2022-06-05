const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('<h1>Ttest</h1>');
});

module.exports = app;
