module.exports = function(sequelize, DataTypes) {
    var userData = sequelize.define("userData", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        company: {
            type: DataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        payment: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })
    
    return userData;
}