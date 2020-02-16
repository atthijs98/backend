import models from "../models";


interface ProductImage {
    id: number
    path: string
    created_at: Date
    updated_at: Date
}

const deleteImageById = async(id: number): Promise<ProductImage> => {
    return await models.ProductImage.destroy({
        where: {
            id: id
        }
    })
};

export {deleteImageById}
