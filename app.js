import express from "express"
import {setCredentials} from './routes/set-credentials.js'
import {upload} from './routes/upload.js'
import {getVol} from './routes/get-vol.js'
import {getStp} from './routes/get-stp.js'
import {getStl} from './routes/get-stl.js'
import {getProcess} from './routes/get-process.js'
import {getImage} from './routes/get-image.js'
import {getBoundingBox} from './routes/get-bb.js'
import {getUpload} from './routes/check-upload.js'
import {getPart} from './routes/check-part.js'
import {credentials} from './middlewares/credentials.js'
const app = express()

//todas las rutas se encuentran aquí
app.use(setCredentials)
app.use(upload)
app.use(getVol);
app.use(getStp);
app.use(getProcess)
app.use(getImage);
app.use(getBoundingBox);
app.use(getUpload);
app.use(getPart);
app.use(getVol);
app.use(upload);
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Route not found <h1>')
})

export {app}





