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
  getAllUsersRoute
]


