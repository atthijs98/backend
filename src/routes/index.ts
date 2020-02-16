import {getIndexRoute} from './index.route'
import {postSignupRoute} from './signup.route'
import {postLoginRoute} from './login.route'
import {
  deleteProductRoute,
  getAllProductsRoute,
  getProductRoute,
  insertProductRoute,
  updateProductRoute
} from "./product.route";
import {deleteUserRoute, getAllUsersRoute, getUserRoute} from "./user.route";
import {deleteImageRoute} from "./image.route";
import {deleteDirectorRoute} from "./director.route";

export default [
  getIndexRoute,
  postSignupRoute,
  postLoginRoute,
  getAllProductsRoute,
  getProductRoute,
  deleteProductRoute,
  insertProductRoute,
  updateProductRoute,
  deleteUserRoute,
  getUserRoute,
  getAllUsersRoute,
  deleteImageRoute,
  deleteDirectorRoute
]


