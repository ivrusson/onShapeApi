import express from "express"
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.post('/upload',credentials,(req,res)=>{
    
})

export {router as upload}