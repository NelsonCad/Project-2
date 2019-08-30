module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Piece = sequelize.define("Piece", {
    artTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
=======
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
>>>>>>> 153e26146741ed7cd4649dc251ade737d2045d13
        len: [1]
      },
      artLink: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
<<<<<<< HEAD
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

  Piece.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Piece.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
=======
      // {
      //   tags: {
      //     
      //   }
      // }
>>>>>>> 153e26146741ed7cd4649dc251ade737d2045d13
    });
  };

  return Piece;
};
