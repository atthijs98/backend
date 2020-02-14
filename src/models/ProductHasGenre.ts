import Genre from "./Genre";
import Product from "./Product";

export default (sequelize, DataTypes) => {
    return sequelize.define("ProductHasGenre", {
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Genre',
                key: 'id'
            }
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
    }, {timestamps: false})
}
