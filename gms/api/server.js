const express = require("express");
const app = express();
var cors = require("cors");
const http = require("http").Server(app);
//const io = require("socket.io")(http);
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
  let sql = `SELECT roleID FROM login WHERE username = ? AND password = ?`;
  db.query(sql, [username, pw], (err, result) => {
    if (err) {
      throw err;
    }
    //console.log();
    if (result.length > 0) {
      res.send(
        String(Object.values(JSON.parse(JSON.stringify(result)))[0].roleID)
      );
    } else {
      res.send("mismatch");
    }
  });
});
