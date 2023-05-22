import { Router } from 'express'
import { setUsers, getUsers, updateUsers, deleteUsers } from '../controllers/users_controller.js';
export const routes_users = Router();


routes_users.post('/users',  setUsers)
routes_users.get('/users', getUsers)
routes_users.put('/users:id',  updateUsers)
routes_users.delete('/users',  deleteUsers)
