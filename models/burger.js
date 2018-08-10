var orm = require('../config/orm');

var burger = {
    selectAll: (callback) => {
      orm.selectAll((res) => {
          callback(res);
      });
    },
    insertOne: (burger, callback) => {
        orm.insertOne(burger, (res) => {
            callback(res);
        });
    },
    updateOne: (burger, callback) => {
        orm.updateOne(burger, (res) => {
            callback(res);
        });
    }
};


module.exports = burger;