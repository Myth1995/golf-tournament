const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user.model');
const Tournament = require('./models/tournament.model');
const routes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/golf', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

routes.route('/add-user').post(function(req, res) {
  let user = new User(req.body);
  user.save()
      .then(user => {
          res.status(200).json({'user': 'user added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new user failed');
      });
});

routes.route('/get-users').get(function(req, res) {
  User.find( function (err, users) {
    if(err) {
      console.log("get-User", err);
    }
    else {
      res.json(users);
    }
  });
});

routes.route('/add-tour').post(function(req, res) {
  let tournament = new Tournament(req.body);
  tournament.save()
      .then(tour => {
          res.status(200).json({'tour': 'tour added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new tournament failed');
      });
});

routes.route('/get-tours').get(function(req, res) {
  Tournament.find( function (err, datas) {
    if(err) {
      console.log("get-tours", err);
    }
    else {
      res.json(datas);
    }
  });
});

app.use('/', routes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
})