import {deleteUserById} from "../../services/user.service";

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await deleteUserById(id);
    return res.json({status: 200, result: {users: user}});
};
export default deleteUser;
