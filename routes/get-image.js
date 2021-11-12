import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/image',credentials,async (req,res)=>{
    res.send('<h1>image</h1>')
})

export {router as getImage}