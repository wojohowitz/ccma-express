'use strict';

module.exports = {
  up: function (migration, dataTypes) {
    return migration.createTable(
        'employees',
        {
          id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          firstName: {
            type: dataTypes.STRING,
            defaultValue: false,
            allowNull: false
          },
          lastName: {
            type: dataTypes.STRING,
            defaultValue: false,
            allowNull: false
          }
        }
      );
  },

  down: function (migration, dataTypes) {
    return migration.dropTable('employees');
  }
};
