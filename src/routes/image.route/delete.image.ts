/**
 * controller for delete products
 *
 * @param {request} req
 * @param {response} res
 */
import {deleteImageById} from "../../services/image.service";

const deleteImage = async (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const image = await deleteImageById(id);
    return res.json({status: 200});
};

export default deleteImage
