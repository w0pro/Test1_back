import express, {Request, Response} from 'express';
const router = express.Router()

router.get('/menu', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send({'1':'Hello World!'})
})

export default router


