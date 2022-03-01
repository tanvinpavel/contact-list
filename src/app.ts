import express, {Request, Response, NextFunction, Application} from 'express';
import 'dotenv/config';
import { route } from './routes/router';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/contact', route);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Contact');
});

app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(404).json('page not found');
});

app.listen(process.env.APPLICATION_PORT, ()=>{
    console.log(`Server is running on port ${process.env.APPLICATION_PORT}`);
    
});
