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
 * @param {string} en_title
 * @param {string} original_title
 * @param {string} romanized_original_title
 * @param {string} runtime
 * @param {string} poster
 * @param {string} plot
 * @param {date} year
 * @param {number} price
 *
 */
const createProduct = async (en_title: string, original_title: string, romanized_original_title: string, runtime: string, poster: string, plot: string, year: Date, price: number): Promise<Product> => {
    const product = await findUniqueProduct(en_title, year);

    if (product) {
        return null
    }
    return await models.Product.create({
        en_title,
        original_title,
        romanized_original_title,
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
 * @param {string} en_title
 * @param {date} year
 */
const findUniqueProduct = async(en_title: string, year: Date): Promise<Product> => {
    return await models.Product.findOne({
        where: {
            en_title: en_title,
            year: year
        }
    })
}

/**
 * Updates product
 *
 * @param id
 * @param en_title
 * @param original_title
 * @param romanized_original_title
 * @param runtime
 * @param poster
 * @param plot
 * @param year
 * @param price
 */
const updateProduct = async(id: number, en_title: string, original_title: string, romanized_original_title: string, runtime: string, poster: string, plot: string, year: Date, price: number): Promise<Product> => {
    return await models.Product.update({en_title: en_title, original_title: original_title, romanized_original_title: romanized_original_title, runtime: runtime, poster: poster, plot: plot, year: year, price: price}, {
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
