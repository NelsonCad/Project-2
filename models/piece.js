module.exports = function(sequelize, DataTypes) {
    var Piece = sequelize.define("Piece", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Piece.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Piece.belongsTo(models.Artist, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Piece;
  };
  