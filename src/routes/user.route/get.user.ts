import {findUserById, getAllUsers} from "../../services/user.service";

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await findUserById(id);
    return res.json({status: 200, result: {users: user}});
};

const getUsers = async (req, res) => {
    const users = await getAllUsers();
    return res.json({status: 200, result: {users: users}});
};
export {getUsers, getUserById};
