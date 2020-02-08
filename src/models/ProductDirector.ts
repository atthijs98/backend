export default (sequelize, DataTypes) => {
    return sequelize.define("ProductDirector", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        last_name: {
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
