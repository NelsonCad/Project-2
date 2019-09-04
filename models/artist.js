module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    // Giving the Author model a name of type STRING
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });
  Artist.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Artist.hasMany(models.Piece, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
