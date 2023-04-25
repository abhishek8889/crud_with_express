// var http = require('http');
// var dbconn = require('./dbconnection');

// //create a server object:
// http.createServer(function (req, res) {
//         var sql = "INSERT INTO users (name, email) VALUES ('Abhishek', 'sharmaabhi8889@gmail.com')";
//         dbconn.query(sql, function (err, result) {
//             if (err) throw err;
//             res.write('1 record created succesfully');
//         });
//     res.end(); //end the response
//   }).listen(8080); //the server object listens on port 8080