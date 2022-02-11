import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let reqPath = path.join(__dirname, '../');

dotenv.config()

const app = express()
app.use(cors({credentials:true}))
app.use(express.static("portfolyo"));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(reqPath + "/index.html")
})

app.post('/', (req, res) =>{
    console.log(req.body)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})