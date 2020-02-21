import models from '../models';
import ProductDirector from '../models/ProductDirector';
import ProductImage from '../models/ProductImage';

const { Sequelize, QueryTypes } = require('sequelize');

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
    trailer: string
    created_at: Date
    updated_at: Date
}

interface ProductDirector {
    id: number
    name: string
    created_at: Date
    updated_at: Date

}

interface ProductImage {
    id: number
    path: string
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
        },
        include: [
            {model: models.ProductDirector, as: 'directors'},
            {model: models.ProductImage, as: 'images'}
        ]
    })
};

/**
 * Finds and returns all products
 *
 */
const getAllProducts = async(): Promise<Product[]> => {
    return await models.Product.findAll({
        include: [
            {model: models.ProductDirector, as: 'directors'},
            {model: models.ProductImage, as: 'images'}
        ]
    });
};

/**
 * Finds and deletes product having given id
 * @param {number} id
 */
const deleteProductById = async(id: number): Promise<Product> => {
    return await models.Product.destroy({
        where: {
            id: id
        },
        include: [
            {model: models.ProductDirector, as: 'directors'},
            {model: models.ProductImage, as: 'images'}
        ]
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
const createProduct = async (en_title: string, original_title: string, romanized_original_title: string, runtime: string, poster: string, plot: string, year: Date, price: number, trailer: string, directors: ProductDirector[], images: ProductImage[]): Promise<Product> => {
    const product = await findUniqueProduct(en_title, year);

    if (product) {
        return null
    }
    return await models.Product.create({
        en_title: en_title,
        original_title: original_title,
        romanized_original_title: romanized_original_title,
        runtime: runtime,
        poster: poster,
        plot: plot,
        year: year,
        price: price,
        trailer: trailer,
        directors: directors,
        images: images
    }, {
       include: [
           {model: models.ProductDirector, as: 'directors'},
           {model: models.ProductImage, as: 'images'}
       ]
    });
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
const updateProduct = async(id: number, en_title: string, original_title: string, romanized_original_title: string, runtime: string, poster: string, plot: string, year: Date, price: number, trailer: string, directors: ProductDirector[], images: ProductImage[]): Promise<Product> => {
    const product = await models.Product.update({en_title: en_title, original_title: original_title, romanized_original_title: romanized_original_title, runtime: runtime, poster: poster, plot: plot, year: year, price: price, trailer: trailer}, {
       where: {
           id: id
       }
    });

    if (directors.length > 0) {
        for (let i = 0; i < directors.length; i++ ) {
            let director = directors[i];
            if (director.id != undefined) {
                await models.ProductDirector.update({productId: id, name: director.name}, {where: {id: director.id}, logging: console.log});
            } else {
                await models.ProductDirector.create({productId: id, name: director.name}, {logging: console.log});
            }
        }
    }
    if (images.length > 0) {
        for (let j = 0; j < images.length; j++) {
            let image = images[j];
            if (image.id != undefined) {
                await models.ProductImage.update({productId: id, path: image.path}, {where: {id: image.id}});
            } else {
                await models.ProductImage.create({productId: id, path: image.path});
            }

        }
    }

    return await models.Product.findOne({
        where: {
            id: id
        },
        include: [
            {model: models.ProductDirector, as: 'directors'},
            {model: models.ProductImage, as: 'images'}
        ]
    });
};


export {
    findProductById,
    getAllProducts,
    deleteProductById,
    createProduct,
    updateProduct
}
