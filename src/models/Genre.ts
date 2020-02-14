import Product from "./Product";

export default (sequelize, DataTypes) => {
    return sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(55),
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
    }, {timestamps: false})//.belongsToMany(Product, {through: 'ProductHasGenre'});

}
