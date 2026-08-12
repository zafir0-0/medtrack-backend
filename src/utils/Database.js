const { Sequelize } = require('sequelize');
const pg = require("pg");

const sequelize = new Sequelize(
    "defaultdb",          // Database name
    "avnadmin",           // Username
    "AVNS_XcQqIzvB4zjjkmV_Tv0", // Password
    {
        host: "test1-medtrack-tuta-ac2d.g.aivencloud.com",
        port: 26300,
        dialect: "postgres",

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

        logging: false,
    }
);

module.exports = { sequelize };
