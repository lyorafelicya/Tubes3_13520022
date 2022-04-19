module.exports = (sequelize, DataTypes) => {
    const DNADisease = sequelize.define('DNADisease', {
      DiseaseName: DataTypes.STRING,
      DNASequence: DataTypes.TEXT
    })
  
    DNADisease.associate = function (models) {
    }
  
    return DNADisease
  }