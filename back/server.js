const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  UserModel = require('./api/models/userModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/serasa')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port);
