import { Request, Response } from 'express';
import { register, login } from '../services/userRepository';
import { userSchema } from '../utils/schemaValidator';
import { User } from '../models/usersModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const validatedUser = userSchema.parse(req.body);
    const newUser = await register(
      validatedUser.nom,
      validatedUser.cognom,
      validatedUser.edat,
      validatedUser.email,
      validatedUser.password
    );

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await login(email, password);
    res.cookie('access_token', token, { httpOnly: true, sameSite: 'strict' });
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: 'Incorrect email or password' });
    console.log(error);
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie('access_token');
  res.status(200).json({ message: 'Logout successful' });
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const validatedUser = userSchema.partial().parse(req.body);
    const updatedUser = await User.findByIdAndUpdate(userId, validatedUser, {
      new: true
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuari no trobat' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate('activitats');

    if (!user) {
      return res.status(404).json({ error: 'Usuari no trobat' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send('User deleted successfully');
  } catch (error) {
    console.error(error);
  }
};
