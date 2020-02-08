import models from '../models'
import {hash, compare} from 'bcrypt'

interface User {
  id: string
  email: string
  first_name: string
  middle_name: string
  last_name: string
  password: string
  created_at: Date
  updated_at: Date
}

/**
 * returns existing user if it exists
 *
 * @param {string} email
 */
const findUserByEmail = async (email: string): Promise<User> => {
  return await models.User.findOne({
    where: {
      email: email
    }
  })
};

/**
 * hashes plaintext password
 *
 * @param {string} password
 */
const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, parseInt(process.env.SALT_ROUNDS))
};

/**
 * returns whether or not the given password matches the encrypted password
 *
 * @param password
 * @param originalPassword
 */
const isPasswordCorrect = async (password: string, originalPassword: string): Promise<boolean> => {
  return await compare(password, originalPassword)
};

/**
 * inserts a user in the database
 *
 * @param email
 * @param first_name
 * @param middle_name
 * @param last_name
 * @param password
 */
const createUser = async (email: string, first_name: string, middle_name: string, last_name: string, password: string): Promise<User> => {
  const user = await findUserByEmail(email);

  if (user) {
    return null
  }

  const encPassword = await hashPassword(password);

  return await models.User.create({
    email,
    password: encPassword,
    first_name,
    middle_name,
    last_name
  })
};

const findUserById = async (id: number): Promise<User> => {
  return await models.User.findOne({
    where: {
      id: id
    }
  })
};

const getAllUsers = async(): Promise<User[]> => {
  return await models.User.findAll();
};

const deleteUserById = async(id: number): Promise<User> => {
  return await models.User.destroy({
    where: {
      id: id
    }
  })
};

export {
  findUserByEmail,
  createUser,
  isPasswordCorrect,
  findUserById,
  getAllUsers,
  deleteUserById
}
