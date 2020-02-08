export default (sequelize, DataTypes) => {
    return sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(55),
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
