module.exports = function(sequelize,DataTypes){
  var model,config;

  config = {
    underscored: true,
    comment: 'Company Site',
    classMethods: {
      associate: function(models){
        this.hasMany(models.Employee);
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
      comment: 'Site Name'
    }
    address: {
      type: DataTypes.STRING(255),
      comment: 'Site Street Address'
    },
    city: {
      type: DataTypes.STRING(255),
      comment: 'Site City'
    },
    state: {
      type: DataTypes.STRING(100),
      comment: 'Sites State'
    }
    zipCode: {
      type: DataTypes.STRING(10),
      comment: 'Sites Postal Zip Code'
    }
  }

  return sequelize.define('Site',model,config);
}
