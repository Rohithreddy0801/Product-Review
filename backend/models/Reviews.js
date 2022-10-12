module.exports = (sequelize, DataTypes) => {

    const Reviews = sequelize.define("Reviews", {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        product_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quality:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        value:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        link:{
            type: DataTypes.STRING,
            allowNull: true
        },
        desc:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        image:{
            type: DataTypes.TEXT,
            allowNull: true
        }
    })

    return Reviews
}