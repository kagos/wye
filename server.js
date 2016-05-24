const config = require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const router = express.Router();
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

for(var entity of config.entities) {
  routes.setRoute(entity, router);
}

app.use('/api', router);
app.listen(PORT);

console.log('Server started on ' + PORT);
