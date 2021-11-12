import express from 'express'
import {credentials} from '../middlewares/credentials.js'
const router = express.Router()
router.get('/boundingbox',credentials,async (req,res)=>{

})
export {router as getBoundingBox}