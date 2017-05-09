//We'll add some config later
var config = {
  port: process.env.PORT || 2000,
  db: process.env.MONGODB_URI || 'mongodb://localhost/tododb',
  test_port: 2001,
  test_db: 'mongodb://localhost/tododb_test'
};

module.exports = config;
