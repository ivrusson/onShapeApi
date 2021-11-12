import express from 'express'
import {credentials} from '../middlewares/credentials.js'
import  { body,validationResult } from 'express-validator';
import { OnshapeClient }  from '@jstickets12/functionality';

const router = express.Router();
export let client 
router.post('/setCredentials',[
    body('apikey').isString(),body('secretKey').isString(),body('baseUrl').isURL()
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {apiKey,secretKey,baseUrl} = req.body;
    client = OnshapeClient({apiKey,baseUrl,secretKey})


})

export {router as setCredentials}