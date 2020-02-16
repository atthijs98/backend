import Route from '../../router'

import authMiddleware from '../../middlewares/auth.middleware'
import deleteProduct from "./delete.product";
import {getProductById, getProducts} from "./get.product";
import {insertProduct, editProduct} from "./post.product";

const getAllProductsRoute = new Route({
    controller: getProducts,
    middleware: [],
    method: 'get',
    slug: '/product'
});

const getProductRoute = new Route({
   controller: getProductById,
   middleware: [],
   method: 'get',
   slug: '/product/:id'
});

const deleteProductRoute = new Route({
   controller: deleteProduct,
   middleware: [],
   method: 'delete',
   slug: '/product/:id'
});

const insertProductRoute = new Route({
   controller: insertProduct,
   middleware: [],
   method: 'post',
   slug: '/product'
});

const updateProductRoute = new Route({
    controller: editProduct,
    middleware: [],
    method: 'post',
    slug: '/product/:id'
});

export {
    getAllProductsRoute,
    getProductRoute,
    deleteProductRoute,
    insertProductRoute,
    updateProductRoute
}
