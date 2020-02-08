export default (sequelize, DataTypes) => {
    return sequelize.define("UserAdres", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })

}
