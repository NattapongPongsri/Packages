require('colors')

const { TYPE }= require('./helper')

console.log('asdf'.green);
const{sucess,warn,error}=TYPE

const logSuccess=(message)=>{
    const msg = message[sucess]
    console.log(msg);
}
const logwarn=(message)=>{
    const msg = message[warn]
     console.log(msg);
}
const logerror=(message)=>{
    const msg = message[error]
     console.log(msg);
}


const log =()=>{
return {
    sucess: (msg)=>logSuccess(msg),
    warn:(msg)=>logwarn(msg),
    error:(msg)=>logerror(msg)
}
}
const logger= log()

logger.sucess('Yess')
logger.warn('It Okay')
logger.error('Noo')

//module.exports =log