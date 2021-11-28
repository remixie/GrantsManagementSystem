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

  let sql = `SELECT u.roleID, f.deptID, f.facultyID FROM Users u join Faculty f on f.userID = u.userID WHERE u.username = ? AND u.password = ?`;
  db.query(sql, [username, pw], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send(
        {roleID : String(Object.values(JSON.parse(JSON.stringify(result)))[0].roleID),
          deptID: String(Object.values(JSON.parse(JSON.stringify(result)))[0].deptID),
          facultyID:String(Object.values(JSON.parse(JSON.stringify(result)))[0].facultyID)
        }
      );
    } else {
      res.send({roleID: "mismatch",deptID: "",facultyID:""});
    }
  });
});

app.post("/profiles",(req,res) => {
  let operation = req.body.operation;

  if(operation == "get"){
    let sql = `Select username from Users where userID <> 1`;
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
      let deptID = req.body.deptID;
      let sql = `select distinct f.firstName, f.lastName, p.projectTitle from Faculty f join Projects p join Grants g where f.facultyID = p.facultyID and g.facultyID = f.facultyID and f.deptID = ? and g.status = '1'`

    db.query(sql,[deptID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }

    if(operation == 'allFaculty'){
      let deptID = req.body.deptID;
      let sql = `select f.firstName, f.lastName, f.facultyID from Faculty f join Projects p where f.facultyID = p.facultyID and f.deptID = ?`

    db.query(sql,[deptID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }

    if(operation == 'allFunding'){
      let deptID = req.body.deptID;
      let sql = `select sum(a.totalAwarded) as total, d.departmentName from Accounts a join Projects p join Faculty f join Departments d on d.deptID = f.deptID and p.facultyID = a.facultyID and f.facultyID = p.facultyID and f.deptID = ?`
      db.query(sql,[deptID], (err, result) => {
        if (err) {
          throw err;
        }
        if(result.length > 0) {
          res.send(Object.values(JSON.parse(JSON.stringify(result)))[0])
        }
      });
    }

    if(operation == 'totalFacultyFunds'){
      let facultyID = req.body.facultyID;
      let sql = `select f.firstName, f.lastName, sum(a.totalAwarded) as total from Accounts a join Projects p join Faculty f on p.facultyID = a.facultyID and f.facultyID = p.facultyID where f.facultyID = ?`

    db.query(sql,[facultyID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }

    if(operation == 'remainingFacultyFunds'){
      let facultyID = req.body.facultyID;
      let sql = `select a.totalRemaining from Accounts a join Projects p join Faculty f on p.facultyID = a.facultyID and f.facultyID = p.facultyID where f.facultyID = ?`

    db.query(sql,[facultyID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }
});


app.post("/fac",(req,res) => {
  let operation = req.body.operation;
    if(operation == "allAwardedGrantNames"){
      let facultyID = req.body.facultyID;
      let sql = `select grantID, grantName from Grants where facultyID = ?`

    db.query(sql,[facultyID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }

    if(operation == "activeGrantNames"){
      let facultyID = req.body.facultyID;
      let sql = `select grantID, grantName from Grants g where g.facultyID = ? and g.status = 1`

    db.query(sql,[facultyID], (err, result) => {
      if (err) {
        throw err;
      }
      if(result.length > 0) {
        res.send(result)
      }
      
    });
    }
});