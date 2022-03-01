import express, {Request, Response, NextFunction, Application} from 'express';
import 'dotenv/config';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.APPLICATION_PORT, ()=>{
    console.log(`Server is running on port ${process.env.APPLICATION_PORT}`);
    
});
