// models/Contact.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
  host: process.env.SQL_SERVER,
  dialect: 'mssql',
  options: {
    trustServerCertificate: true, // For local development
  },
});

const Contact = sequelize.define('Contact', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Sync the model with the database
(async () => {
  await sequelize.sync();
})();

module.exports = Contact;
