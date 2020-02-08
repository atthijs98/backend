export default (sequelize, DataTypes) => {
    return sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(6,2),
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
