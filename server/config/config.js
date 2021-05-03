/**
 * @description
 * This is the constroller for the calls
 * @author Punit Singh
 * @since 02 May, 2021
 */

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };