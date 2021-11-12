import  {client}  from '../routes/set-credentials.js'
export const credentials = function(req,res,next){
    if(client === undefined){
        throw Error('Credentials must be set using /setCredentials')

    }
    next()

}

