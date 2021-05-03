/**
 * @description
 * This is the constroller for the calls
 * @author Punit Singh
 * @since 02 May, 2021
 */


module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      ToName: {
        type: Sequelize.STRING
      },
      FromName: {
        type: Sequelize.STRING
      },
      ToNumber: {
        type: Sequelize.BIGINT
      },
      FromNumber: {
          type: Sequelize.BIGINT
      },
      CallDuration: {
        type: Sequelize.INT
      }
    });
  
    return Users;
  };