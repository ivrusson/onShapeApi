import { app } from "./app.js"

const port = process.env.port || 3000
app.listen(port,()=>{
    console.log(`server listeing on port: ${port}`)
})
