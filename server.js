const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();

const port = process.env.PORT || 5000;

app.use('/api', apiRoutes);

app.get('*', function(request, response) {
  response.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
