/**
 * controller for delete products
 *
 * @param {request} req
 * @param {response} res
 */
import {deleteDirectorById} from "../../services/director.service";

const deleteDirector = async (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const director = await deleteDirectorById(id);
    return res.json({status: 200});
};

export default deleteDirector
