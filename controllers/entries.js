var db = require("../models");

db.User.findAll().then(entries => {
    console.log(entries);
  })