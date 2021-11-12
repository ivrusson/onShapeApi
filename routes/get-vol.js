import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/volumen',credentials,(req,res)=>{
    res.send('<h1>vol</h1>')
})


export {router as getVol}