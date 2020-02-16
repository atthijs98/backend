import models from "../models";


interface ProductDirector {
    id: number
    name: string
    created_at: Date
    updated_at: Date
}

const deleteDirectorById = async(id: number): Promise<ProductDirector> => {
    return await models.ProductDirector.destroy({
        where: {
            id: id
        }
    })
};

export {deleteDirectorById}
