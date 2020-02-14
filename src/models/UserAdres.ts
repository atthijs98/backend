// export default (sequelize, DataTypes) => {
//     return sequelize.define("UserAdres", {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         user_id: {
//             type: DataTypes.UUID,
//             allowNull: false,
//             references: {
//                 model: 'User',
//                 key: 'id'
//             }
//         },
//         country: {
//             type: DataTypes.STRING(255),
//             allowNull: false
//         },
//         postal_code: {
//             type: DataTypes.STRING(10),
//             allowNull: false
//         },
//         street_name: {
//             type: DataTypes.STRING(255),
//             allowNull: false
//         },
//         street_number: {
//             type: DataTypes.STRING(10),
//             allowNull: false
//         },
//         created_at: {
//             type: DataTypes.DATE,
//             defaultValue: new Date(),
//             allowNull: false
//         },
//         updated_at: {
//             type: DataTypes.DATE,
//             defaultValue: new Date(),
//             allowNull: false
//         }
//     }, {timestamp: false})
//
// }

const User = require('./User');
const { Sequelize, DataTypes } = require('sequelize');

export default(sequelize, DataTypes) => {
    const UserAdres = sequelize.define("UserAdres", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        country: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        postal_code: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        street_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        street_number: {
            type: DataTypes.STRING(10),
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
    }, {timestamp: false})

    UserAdres.associate = function (models) {
        models.UserAdres.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    }

    return UserAdres;
};
