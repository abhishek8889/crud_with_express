var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port:3307,
    database: 'todoapp'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    return true;
  });

  module.exports = con;