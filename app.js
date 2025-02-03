const express = require('express');
const bodyParser = require('body-parser');
const versionsRouter = require('./routes/versions');

const app = express();
app.use(bodyParser.json());

app.use('/versions', versionsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
