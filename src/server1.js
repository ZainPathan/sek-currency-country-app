const express = require('express');
const proxy = require('./setupProxy');

const app = express();
proxy(app);

app.listen(80, '0.0.0.0');
