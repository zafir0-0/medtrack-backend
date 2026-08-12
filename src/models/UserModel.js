const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/Database');

class User extends Sequelize.Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,               // Integer type for primary key
            autoIncrement: true,                   // Auto-increment behavior
            primaryKey: true,                      // Marks as primary key
        },
        full_name: {
            type: DataTypes.STRING(150),           // VARCHAR(150)
            allowNull: false,                      // NOT NULL constraint
        },
        email: {
            type: DataTypes.STRING(150),           // VARCHAR(150)
            allowNull: false,                      // NOT NULL constraint
            unique: true,                          // UNIQUE constraint
        },
        password_hash: {
            type: DataTypes.TEXT,                  // TEXT type for hashed password
            allowNull: false,                      // NOT NULL constraint
        },
        role: {
            type: DataTypes.STRING(50),            // VARCHAR(50)
            allowNull: false,                      // NOT NULL constraint
        },
        is_active: {
            type: DataTypes.BOOLEAN,               // BOOLEAN type
            defaultValue: true,                    // DEFAULT TRUE
        },
    },
    {
        sequelize,                                 // Sequelize instance
        modelName: 'users',                        // Model name
        freezeTableName: true,                     // Prevents pluralization
        timestamps: false,                         // Disables createdAt/updatedAt
        underscored: true,                         // Uses snake_case column names
    }
);

User.sync({ force: false });

module.exports = User;
