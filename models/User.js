const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {
        //TABLE COLUMN DEFINITION GO HERE
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //at least 4 characters long
                len: [4]
            }
        }
    },
    {
        //TABLE CONFIGS OPTIONS GO HERE

        //pass in our imported sequelize connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;