// export default (sequelize, DataTypes) => {
//   return sequelize.define("User", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     user_role: {
//       type: DataTypes.STRING(6),
//       allowNull: false
//     },
//     created_at: {
//       type: DataTypes.DATE,
//       defaultValue: new Date(),
//       allowNull: false
//     },
//     updated_at: {
//       type: DataTypes.DATE,
//       defaultValue: new Date(),
//       allowNull: false
//     }
//   }, {timestamps: false})
// }

const UserAdres = require('./UserAdres');
const { Sequelize, DataTypes } = require('sequelize');

export default(sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_role: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    }
  }, {timestamps: false});

  User.associate = function (models) {
    models.User.hasMany(models.UserAdres);
  }

  return User;
};

