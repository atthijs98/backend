import {createUser} from '../../services/user.service'
import * as jwt from 'jsonwebtoken'

/**
 * controller for signing up users
 *
 * @param {request} req
 * @param {response} res
 */
const postSignup = async (req, res) => {
  console.log(req.body);
  const {email, name, password, user_role} = req.body;

  if (!email || !password || !name || !user_role) {
    return res.status(400).json({status: 400, message: 'email, name of password is null'})
  }

  const user = await createUser(email, name, password, user_role);

  if (!user) {
    return res.status(400).json({status: 400, message: 'email is al in gebruik'})
  }

  const token = jwt.sign({id: user.id, email: user.email, role: user.user_role}, process.env.JWT_SECRET);

  return res.status(200).json({status: 200, result: {token: `JWT ${token}`}})
};

export {
  postSignup
}
