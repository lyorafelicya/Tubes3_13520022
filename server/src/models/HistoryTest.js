module.exports = (sequelize, DataTypes) => {
    const HistoryTest = sequelize.define('HistoryTest', {
      Username: DataTypes.STRING,
      DiseaseName : DataTypes.STRING,
      DNASequence: DataTypes.TEXT,
      TestDate : DataTypes.DATE,
      Status : DataTypes.BOOLEAN
    })
  
    HistoryTest.associate = function (models) {
    }
  
    return HistoryTest
  }