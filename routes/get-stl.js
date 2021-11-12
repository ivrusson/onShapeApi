import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/stl',credentials,(req,res)=>{
    res.send('<h1>stl</h1>')
})

export {router as getStl}