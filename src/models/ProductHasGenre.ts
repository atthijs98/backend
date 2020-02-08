export default (sequelize, DataTypes) => {
    return sequelize.define("ProductHasGenre", {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
}
