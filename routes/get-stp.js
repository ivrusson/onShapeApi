import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/stp',credentials,(req,res)=>{
    res.send('<h1>stp</h1>')
})

export {router as getStp}