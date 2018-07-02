const db = require("../models/users");
var jwt = require("jsonwebtoken");

//Mongoose query abstractions
module.exports = {
  findLogin: function(req, res) {
    console.log("hello world");
    console.log(req.body);
    db.Users.findOne({ email: req.body.email })
      .then(dbModel => {
        if(dbModel) {  
        console.log(dbModel);
        var token = jwt.sign({ data: dbModel }, "secret");
        res.json({ token, name: "hellow" });
        }
        else {
          console.log(987);
          res.json({userStatus: "User Not Found"})
        }
      })
      .catch(err => res.status(422).json(err));
  },
  findAuth: function(req, res) {
    var decoded = jwt.verify(req.body.headers.Authorization, 'secret');
    console.log(decoded.data.firstName);
    db.Users.findOne( {"firstName": decoded.data.firstName})
      .then(dbModel => {
        if(dbModel) {
          console.log(123);
        res.json(dbModel);
        }
        else {
          console.log(321);
          res.json({response: "no bueno"})
        }
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create(req.body)
      .then(dbModel => {
        var token = jwt.sign({ data: dbModel }, "secret");
        res.json({ token, dbModel });
        console.log(token);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
