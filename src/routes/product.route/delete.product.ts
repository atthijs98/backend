/**
 * controller for delete products
 *
 * @param {request} req
 * @param {response} res
 */
import {deleteProductById} from "../../services/product.service";

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await deleteProductById(id);
    return res.json({status: 200});
};

export default deleteProduct
