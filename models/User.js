import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

// CREATE TABLE users
const User = sequelize.define('user', {
  // first_name VARCHAR(255) NOT NULL
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// User.sync();

export default User;
