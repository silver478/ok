const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
var mysqlconnec = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "webapp",
  multipleStatements: true,
});
const express = require("express");
const app = express();
const bodypar = require("body-parser");
app.use(cors());
app.use(bodypar.json());
mysqlconnec.connect((err) => {
  if (!err) {
    console.log("connected successfully");
  } else {
    console.log("errorr" + JSON.stringify(err, undefined, 2));
  }
});
app.listen(4000, () => {
  console.log("express server is running !!!11");
});

app.get("/currentrides/:id", (req, res) => {
  mysqlconnec.query(
    "SELECT * FROM rides where userid=? ",
    [req.params.id],
    (err, res, fields) => {
      if (!err) {
        res.send(res);
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/verifytok", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.send("Forbidden");
    } else {
      res.send("Authorized");
    }
  });
});

app.post("/loginauth", (req, res) => {
  let emp = req.body;
  mysqlconnec.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [emp.email, emp.password],
    (err, row, fields) => {
      if (row.length > 0) {
        if (row[0].usertypeid == 1) {
          console.log(row);
          const user = {
            id: row[0].userid,
            email: emp.email,
            name: row[0].fullname,
          };
          jwt.sign({ user }, "secretkey", (err, token) => {
            var status1 = "customer";
            res.json({ token, status1 });
          });
        } else if (row[0].usertypeid == 2) {
          console.log(row);
          const user = {
            id: row[0].userid,
            email: emp.email,
            name: row[0].fullname,
          };
          jwt.sign({ user }, "adminkey", (err, token) => {
            var status1 = "Admin";
            res.json({ token, status1 });
          });
        }
      } else {
        console.log(emp.email);
        console.log(emp.password);
        var status1 = "false";
        res.json(status1);
      }
    }
  );
});
app.delete("/employees/:id", (req, res) => {
  mysqlconnec.query(
    "DELETE FROM usertypes WHERE usertype=?",
    [req.params.id],
    (err, row, fields) => {
      if (!err) {
        res.send("DELETED SUCCESSFULLY");
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/carregister", (req, res) => {
  let emp = req.body;
  var sql =
    "INSERT INTO userregistcar(cartypeid,car_name,userid,userregistcarno) VALUES(?,?,?,?);";
  mysqlconnec.query(
    sql,
    [emp.cartypeid, emp.car_name, emp.userid, emp.userregistcarno],
    (err, row, fields) => {
      if (!err) {
        res.send(row);
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/signup", cors(), (req, res) => {
  let emp = req.body;
  var sql =
    "INSERT INTO users(fullname,Gender,contactno,email,usertypeid,password,dateofbirth) VALUES(?,?,?,?,?,?,?);";
  mysqlconnec.query(
    sql,
    [
      emp.fullname,
      emp.Gender,
      emp.contactno,
      emp.email,
      emp.usertypeid,
      emp.password,
      emp.dateofbirth,
    ],
    (err, row, fields) => {
      if (!err) {
        console.log(row);
        const user = {
          id: row.insertId,
          email: emp.email,
          name: emp.fullname,
        };
        jwt.sign({ user }, "secretkey", (err, token) => {
          var status1 = "success";
          res.json({ token, status1 });
        });
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/addride", verifyToken, (req, res) => {
  let emp = req.body;
  var sql =
    "INSERT INTO rides(userid,userregistcarid,startlat,startlng,endlat,endlng,Starting_address,End_adrress) VALUES(?,?,?,?,?,?,?,?);";
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      mysqlconnec.query(
        sql,
        [
          emp.userid,
          emp.userregistcarid,
          emp.startlat,
          emp.startlng,
          emp.endlat,
          emp.endlng,
          emp.Starting_address,
          emp.End_adrress,
        ],
        (err, row, fields) => {
          if (!err) {
            res.json({ row: row, authData: authData });
          } else {
            console.log(err);
          }
        }
      );
    }
  });
});

app.post("/bringrides", verifyToken, (req, res) => {
  let emp = req.body;
  var sql =
    "SELECT * FROM rides,users WHERE rides.End_adrress=? and rides.userid=users.userid;";
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      mysqlconnec.query(sql, [emp.End_adrress], (err, row, fields) => {
        if (!err) {
          res.send(row);
        } else {
          console.log(err);
        }
      });
    }
  });
});
function verifyToken(req, res, next) {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    req.token = header;
    next();
  } else {
    res.sendStatus(403);
  }
}
