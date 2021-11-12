import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/process',credentials,(req,res)=>{
    res.send('<h1>process</h1>')
})

export {router as getProcess}