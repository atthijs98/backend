/**
 * controller for get products
 *
 * @param {request} req
 * @param {response} res
 */
import {findProductById, getAllProducts} from "../../services/product.service";

const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await findProductById(id);
    return res.json({status: 200, result: {product: product}});
};

const getProducts = async (req, res) => {
    const products = await getAllProducts();
    return res.json({status: 200, result: {products: products}});
};

export {getProductById, getProducts};
