import models from '../models';
import {hash, compare} from 'bcrypt';
import {findUserByEmail} from "./user.service";

interface Product {
    id: number
    en_title: string
    original_title: string
    romanized_original_title: string
    runtime: string
    poster: string
    plot: string
    year: Date
    price: number
    created_at: Date
    updated_at: Date
}

/**
 * Finds and returns Product by id
 * @param {number} id
 */
const findProductById = async(id:number): Promise<Product> => {
    return await models.Product.findOne({
        where: {
            id: id
        }
    })
};

/**
 * Finds and returns all products
 *
 */
const getAllProducts = async(): Promise<Product[]> => {
    return await models.Product.findAll();
};

/**
 * Finds and deletes product having given id
 * @param {number} id
 */
const deleteProductById = async(id: number): Promise<Product> => {
    return await models.Product.destroy({
        where: {
            id: id
        }
    });
};

/**
 * Inserts product in database
 *
 * @param {string} enTitle
 * @param {string} originalTitle
 * @param {string} romanizedOriginalTitle
 * @param {string} runtime
 * @param {string} poster
 * @param {string} plot
 * @param {date} year
 * @param {number} price
 *
 */
const createProduct = async (enTitle: string, originalTitle: string, romanizedOriginalTitle: string, runtime: string, poster: string, plot: string, year: Date, price: number): Promise<Product> => {
    const product = await findUniqueProduct(enTitle, year);

    if (product) {
        return null
    }
    return await models.Product.create({
        enTitle,
        originalTitle,
        romanizedOriginalTitle,
        runtime,
        poster,
        plot,
        year,
        price
    })
};

/**
 * Checks and returns a product by a combination of en_title and year
 *
 * @param {string} enTitle
 * @param {date} year
 */
const findUniqueProduct = async(enTitle: string, year: Date): Promise<Product> => {
    return await models.Product.findOne({
        where: {
            en_title: enTitle,
            year: year
        }
    })
}

/**
 * Updates product
 *
 * @param id
 * @param enTitle
 * @param originalTitle
 * @param romanizedOriginalTitle
 * @param runtime
 * @param poster
 * @param plot
 * @param year
 * @param price
 */
const updateProduct = async(id: number, enTitle: string, originalTitle: string, romanizedOriginalTitle: string, runtime: string, poster: string, plot: string, year: Date, price: number): Promise<Product> => {
    return await models.Product.update({en_title: enTitle, original_title: originalTitle, romanized_original_title: romanizedOriginalTitle, runtime: runtime, poster: poster, plot: plot, year: year, price: price}, {
       where: {
           id: id
       }
    });
};


export {
    findProductById,
    getAllProducts,
    deleteProductById,
    createProduct,
    updateProduct
}
