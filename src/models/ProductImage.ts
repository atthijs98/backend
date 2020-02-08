export default (sequelize, DataTypes) => {
    return sequelize.define("ProductImage", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
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
    })

}
