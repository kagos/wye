const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const router = express.Router();
const routes = require("./routes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.setRoute('excuses', router);
routes.setRoute('alibis', router);

app.use('/api', router);
app.listen(PORT);

console.log('Server started on ' + PORT);
