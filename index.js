import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>res.send('hello from Homepage'));
app.listen(PORT,() => console.log(`Server is currently running on http://localhost:${PORT}`));