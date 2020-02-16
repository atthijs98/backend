import Route from '../../router'

import authMiddleware from '../../middlewares/auth.middleware'
import deleteDirector from "./delete.director";

const deleteDirectorRoute = new Route({
    controller: deleteDirector,
    middleware: [],
    method: 'delete',
    slug: '/director/:id'
});

export {deleteDirectorRoute}
