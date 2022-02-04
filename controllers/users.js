import { v4 as uuidv4 } from 'uuid';

export const createUser = (req,res)=>{
    const user = req.body;
    const id = uuidv4();
    const userWithId = {...user,userId:id}; 
    users.push(userWithId);
    res.send(`user with the name ${user.firstName} added to the database`);
    };
export const getUsers = (req,res) =>{
    res.send(users);
    };
    export const getUser = (req,res)=>{
    const id = req.params.id;
     const found = users.find((user) =>user.userId === id);
     console.log(id);
     console.log(found);
     res.send(found)
    };
export const deleteUser = (req,res)=>{
    const id = req.params.id;
    users = users.filter((user) =>user.userId !== id);
    res.send(`deleted`);
    };
export const patchUser = (req,res) =>{
        const userId = req.params.id;
        const {firstName,age,phone} = req.body;
        const user = users.find((us) => us.userId === userId);
        console.log(user);
        console.log(userId);
    
        if(firstName){
            user.firstName = firstName;
        }
        if(age){
            user.age = age;
        }
        if(phone){
            user.phone = phone;
        }
        console.log(firstName);
        console.log(age);
        console.log(phone);
        res.send(`updated`);
    };
