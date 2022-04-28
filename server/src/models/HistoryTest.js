module.exports = (sequelize, DataTypes) => {
    const HistoryTest = sequelize.define('HistoryTest', {
      Username: DataTypes.STRING,
      DiseaseName : {
        type:DataTypes.STRING,
        references:{
          model: 'DNADiseases',
          key: 'DiseaseName'
        }
      },
      DNASequence: DataTypes.TEXT,
      TestDate : DataTypes.DATE,
      percentage : DataTypes.FLOAT,
      Status : DataTypes.BOOLEAN,
    })
  
    HistoryTest.associate = function (models) {
    }
  
    return HistoryTest
  }