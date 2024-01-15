import express, { Request, Response } from 'express';
import api from "./routes/api";


const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!');
});

app.use('/api/v1', api)


const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
