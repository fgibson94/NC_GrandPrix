module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        startLoc: DataTypes.STRING,
        endLoc: DataTypes.STRING,

    })
    return User;
}

// sequelize.query("SELECT * FROM User").then(myTableRows => {
//     console.log(myTableRows)
//   })
  