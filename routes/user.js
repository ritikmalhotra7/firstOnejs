import express from 'express';
// const controller = require('../controllers/users.js');
import {createUser,getUsers,getUser,deleteUser,patchUser} from '../controllers/users.js';
const router = express.Router();

let users = [];

router.post('/',createUser);

router.get('/',getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);
export default router;