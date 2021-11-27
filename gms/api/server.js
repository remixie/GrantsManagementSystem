const express = require("express");
const app = express();
var cors = require("cors");
const http = require("http").Server(app);
const mysql = require("mysql");
var port = process.env.PORT || 3000;

http.listen(port, () => console.log("Listening to port " + port + "."));

app.use(express.urlencoded({ extended: true }));
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);

var db = mysql.createConnection({
  host: "db",
  port: "3306",
  user: "personman",
  password: "MYSQL_PASSWORD",
  database: "MYSQL_DATABASE",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("The MySQL server connection is now running.");
});

app.post("/check-login", (req, res) => {
  let username = req.body.username;
  let pw = req.body.password;
  //console.log("req =" + JSON.stringify(req.body));
  let sql = `SELECT roleID FROM Users WHERE username = ? AND password = ?`;
  db.query(sql, [username, pw], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send(
        String(Object.values(JSON.parse(JSON.stringify(result)))[0].roleID)
      );
    } else {
      res.send("mismatch");
    }
  });
});

app.post("/profiles",(req,res) => {
  let operation = req.body.operation;

  if(operation == "get"){
    let sql = `Select username from Users`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      let obj = (JSON.parse(JSON.stringify(result))).map(function(value){return value.username})
      if (obj.length > 0) {
        res.send(
          obj
        );
      }
    });
  }

  if(operation == "add"){
    let username = req.body.username;
    let pw = req.body.password;
    let rid= req.body.roleid;
    let sql = `INSERT into Users (roleID, username, password) VALUES (?,?,?)`;

    db.query(sql, [rid, username, pw], (err, result) => {
      if (err) {
        throw err;
      }
      if (JSON.parse(JSON.stringify(result)).affectedRows == "1") {
        console.log("A new user has been added!")
      }
    });
  }

  if(operation == "update"){
    let pw = req.body.password;
    let username = req.body.username;
    let sql =  `UPDATE Users Set password = ? where username = ?`

    db.query(sql, [pw, username], (err, result) => {
      if (err) {
        throw err;
      }
      if (JSON.parse(JSON.stringify(result)).affectedRows == "1") {
        console.log("A user has been updated!")
      }
    });
  }

  if(operation == "delete"){
    let username = req.body.username;
    let sql = `DELETE from Users where username = ?`

    db.query(sql, [username], (err, result) => {
      if (err) {
        throw err;
      }
      if (JSON.parse(JSON.stringify(result)).affectedRows == "1") {
        console.log("A user has been deleted!")
      }
    });
  }

});

app.post("/chair",(req,res) => {
  let operation = req.body.operation;
    if(operation == 'active'){
      let sql = `select firstName, lastName from Faculty where = ?`

    db.query(sql, [username], (err, result) => {
      if (err) {
        throw err;
      }
      if (JSON.parse(JSON.stringify(result)).affectedRows == "1") {
        console.log("A user has been deleted!")
      }
    });
    }
});