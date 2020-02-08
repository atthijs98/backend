/**
 * controller for product insert
 *
 * @param {request} req
 * @param {response} res
 */
import {createProduct, updateProduct} from "../../services/product.service";

const insertProduct = async (req, res) => {
    const {en_title, original_title, romanized_original_title, runtime, poster, plot, year, price} = req.body;
    const product = await createProduct(en_title, original_title, romanized_original_title, runtime,poster, plot, year, price);
    return res.json({status: 200, result: {product: product}});
};

const editProduct = async(req, res) => {
    const {id, en_title, original_title, romanized_original_title, runtime, poster, plot, year, price} = req.body;
    const product = await updateProduct(id, en_title, original_title, romanized_original_title, runtime,poster, plot, year, price);
    return res.json({status: 200, result: {product: product}});
};

export {insertProduct, editProduct};
