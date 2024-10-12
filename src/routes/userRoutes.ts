import { Router } from 'express';
import {
  createUser,
  updateUser,
  getUserById,
  deleteUser,
  loginUser
} from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.put('/users/:id', authMiddleware, updateUser);
userRouter.get('/users/:id', authMiddleware, getUserById);
userRouter.delete('/users/:id', authMiddleware, deleteUser);
userRouter.get('/login', loginUser);

export default userRouter;
