import Route from '../../router'

import authMiddleware from '../../middlewares/auth.middleware'
import deleteImage from "./delete.image";

const deleteImageRoute = new Route({
    controller: deleteImage,
    middleware: [],
    method: 'delete',
    slug: '/image/:id'
});

export {deleteImageRoute}
