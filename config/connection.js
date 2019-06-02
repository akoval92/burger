var mysql = require("mysql");   // require mysql npm package

var connection = mysql.createConnection({   // connect to host  \/
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});                                             //              /\

connection.connect(function(err) {      // throw error if it does not connect to host
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);       // otherwise show message and 
                                                              // connection id  ??where does 
                                                              // thread.id come from??
});

module.exports = connection;                                  // export the connection from mysql
                                                              // **3306 comes from mysql






