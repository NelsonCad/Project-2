module.exports = function(sequelize, DataTypes) {
    var Piece = sequelize.define("Piece", {
      artTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      artDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      artLink: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
      // {
      //   tags: {
      //     
      //   }
      // }
    });
    return Piece;
  };
