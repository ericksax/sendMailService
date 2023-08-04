import express, { Application } from 'express';
import { router } from './routes';
import cors from 'cors';
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.static('./src/public'));

app.listen(3000, () => {
    console.log('server is running')
})