module.exports = function(sequelize, DataTypes){

  var model,config;

  config = {
    underscored: true,
    comment: 'Company Employees',
    classMethods: {
      associate: function(models){
        this.belongsTo(models.Employee,{
          as: 'Supervisor',
          foreignKey: 'supervisor_id'
        });
        this.hasMany(models.Employee,{
          foreignKey: 'supervisor_id'
        });
        this.belongsTo(models.Title);
        this.belongsTo(models.Site);
      }
    }
  };

  model = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'Employee First Name'
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'Employee Last Name'
    },
    hireDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Employee Date of Hire'
    },
    termDate: {
      type: DataTypes.DATE,
      comment: 'Employee Date of Termination'
    },
    employeeStatus: {
      type:DataTypes.ENUM,
      allowNull: false,
      defaultValue: 'active',
      values: ['active','terminated','leave']
    }
  };

  return sequelize.define('Employee',model,config);

}

