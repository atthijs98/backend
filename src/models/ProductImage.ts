const Product = require('./Product');
const { Sequelize, DataTypes } = require('sequelize');

export default(sequelize, DataTypes) => {
    const ProductImage = sequelize.define('ProductImage', {
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
            type: DataTypes.STRING(55),
            allowNull: false
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {timestamps: false, tableName: 'product_image'});

    ProductImage.associate = function (models) {
        models.ProductImage.belongsTo(models.Product, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    }

    return ProductImage;
};
