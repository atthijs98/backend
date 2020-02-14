const ProductDirector = require('./ProductDirector');
const ProductImage = require('./ProductImage');
import Genre from "./Genre";
const { Sequelize, DataTypes } = require('sequelize');

export default(sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        en_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        original_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        romanized_original_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        runtime: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        plot: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        year: {
            type: DataTypes.DATE,
            format: 'YYYY',
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(6,2),
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

    Product.associate = function (models) {
        models.Product.hasMany(models.ProductDirector,{as: 'directors'});
        models.Product.hasMany(models.ProductImage, {as: 'images'});
    }

    return Product;
};
