module.exports = (sequelize, DataTypes) => {
    const DNADisease = sequelize.define('DNADisease', {
      DiseaseName: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      DNASequence: DataTypes.TEXT
    })
  
    DNADisease.associate = function (models) {
    }
  
    return DNADisease
  }