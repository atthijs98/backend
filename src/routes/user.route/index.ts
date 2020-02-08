import Route from '../../router'

import authMiddleware from '../../middlewares/auth.middleware'
import {getUserById, getUsers} from "./get.user";
import deleteUser from "./delete.user";

const getAllUsersRoute = new Route({
    controller: getUsers,
    middleware: [authMiddleware],
    method: 'get',
    slug: '/user'
});

const getUserRoute = new Route({
    controller: getUserById,
    middleware: [authMiddleware],
    method: 'get',
    slug: '/user/:id'
});

const deleteUserRoute = new Route({
    controller: deleteUser,
    middleware: [authMiddleware],
    method: 'delete',
    slug: '/user/:id'
});

export {
    getAllUsersRoute,
    getUserRoute,
    deleteUserRoute
}
