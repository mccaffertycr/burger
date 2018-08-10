var connection = require('./connection');

var orm = {
    selectAll: (callback) => {
      var query = 'select * from burgers';
      connection.query(query, (err, res) => {
          if (err) throw err;
          callback(res);
      });
    },
    insertOne: (burger, callback) => {
      var query = 'insert into burgers set ?';
      connection.query(query, burger, (err, res, fields) => {
          if (err) throw err;
          callback([burger, res.insertId]);
      });
    },
    updateOne: (burger, callback) => {
      var query = 'update burgers set devoured = ? where id = ?';
      connection.query(query, [burger.devoured, burger.id], (err, res, fields) => {
          if (err) throw err;
          callback(burger);
      });
    }
};


module.exports = orm;