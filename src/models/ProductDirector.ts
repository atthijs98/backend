const Product = require('./Product');
const { Sequelize, DataTypes } = require('sequelize');

export default(sequelize, DataTypes) => {
    const ProductDirector = sequelize.define('ProductDirector', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // product_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'Product',
        //         key: 'id'
        //     }
        // },
        name: {
            type: DataTypes.STRING(255),
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
    }, {timestamps: false, tableName: 'product_director'});

    ProductDirector.associate = function (models) {
        models.ProductDirector.belongsTo(models.Product, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    }

    return ProductDirector;
};

