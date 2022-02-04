import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';


const  users = [];

router.post('/',(req,res)=>{
    const user = req.body;
    const id = uuidv4();
    const userWithId = {...user,userId:id}; 
    users.push(userWithId);
    res.send(`user with the name ${user.firstName} added to the database`);
})


router.get('/',(req,res)=>{
    res.send(users);
});

router.get('/:id',(req,res)=>{
    const {userId} = req.params;
    const found = users.find((user) => user.userId === userId);
    res.send(found);
});
export default router;