const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});

module.exports = app;
