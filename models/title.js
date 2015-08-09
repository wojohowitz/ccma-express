module.exports = function(sequelize,DataTypes){
  var model,config;
  config = {
    underscored: true,
    classMethods: {
      associate: function(models){
        this.hasMany(models.Employee)
      }
    }
  };

  model = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: 'Department Name'
    }
  };

  return sequelize.define('Title',model,config);
}
