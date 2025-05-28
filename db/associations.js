import User from '../models/User.js';
import Duck from '../models/Ducks.js';
import sequelize from './index.js';

User.hasMany(Duck);

Duck.belongsTo(User, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});

sequelize.sync();
