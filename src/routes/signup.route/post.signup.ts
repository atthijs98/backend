import {createUser} from '../../services/user.service'
import * as jwt from 'jsonwebtoken'

/**
 * controller for signing up users
 *
 * @param {request} req
 * @param {response} res
 */
const postSignup = async (req, res) => {
  const {email, first_name, middle_name, last_name, password} = req.body;

  if (!email || !password || !first_name || last_name) {
    return res.status(400).json({status: 400, message: 'email, name of password is null'})
  }

  const user = await createUser(email, first_name, middle_name, last_name, password);

  if (!user) {
    return res.status(400).json({status: 400, message: 'email is al in gebruik'})
  }

  const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET);

  return res.status(200).json({status: 200, result: {token: `JWT ${token}`}})
};

export {
  postSignup
}
